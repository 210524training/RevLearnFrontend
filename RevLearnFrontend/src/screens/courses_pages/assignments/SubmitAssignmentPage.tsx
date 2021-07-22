import React, { useState } from 'react';
import {
  Button, Platform, Text, View,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { Attachment } from '../../../models/Attachment';
import { uploadFile } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { Course } from '../../../models/Course';
import { updateCourse } from '../../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { Assignment } from '../../../models/Assignment';
import { AssignmentSubmission } from '../../../models/AssignmentSubmission';
import { UserState, selectUser } from '../../../hooks/slices/user.slice';
import { Quiz } from '../../../models/Quiz';
import B from '../../../components/BoldText';
import { SubmitAssignmentPageStyle } from '../../../styles/SubmitAssignmentPage';
import { InputField } from '../../../styles/InputField';

type Props = {
  route: any
}

const SubmitAssignmentPage: React.FC<Props> = ({ route }) => {
  const [inputName, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const navigation = useNavigation();
  const { assignment } = route.params;
  const course = useAppSelector<CourseState>(getCourse);
  const user = useAppSelector<UserState>(selectUser);

  const pickFile = async () => {
    try {
      const file: DocumentPicker.DocumentResult = await DocumentPicker.getDocumentAsync({
        type: '*/*',
      });

      if(file.type === 'success') {
        const { uri, type, name } = file;

        const response = await fetch(Platform.OS === 'android' ? `file://${uri}` : uri);
        const blob = await response.blob();
        const key = await uploadFile(name, blob);
        const fileType = name.split('.');
        const attachment: Attachment = {
          key,
          name: inputName,
          discription: description,
          type: fileType[fileType.length - 1],
        };

        const submission: AssignmentSubmission = {
          submissionID: uuidv4(),
          studentID: user ? user.id : '0',
          submissionDate: new Date(),
          attachment: [attachment],
        };

        const updatedCourse: Course = course as Course;
        updatedCourse.activities.find((activity: (Quiz | Assignment)) => activity.ID === assignment.ID)?.submissions.push(submission);

        await updateCourse(updatedCourse);
        navigation.goBack();
        /* setFileKey(key);
        const resultUrl = await getFile(fileKey);
        setUrl(resultUrl); */
      }
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <View style={SubmitAssignmentPageStyle.container}>
      <Text style={{ fontWeight: 'bold' }}>{assignment?.title}</Text>
      <Text><B input={'Description: '}/>{assignment?.description}</Text>
      <Text><B input={'Due Date: '}/> {assignment?.dueDate}</Text>

      <Text> <B input={'New Submission: '}/></Text>
      <Text> <B input={'Submission Name: '}/> </Text>
      <TextInput
        style={ InputField.container }
        onChangeText={(event) => { setName(event); }} placeholder='My submission'/>
      <Text> <B input={'Description: '}/></Text>
      <TextInput
        style={ InputField.container }
        multiline={true}
        numberOfLines={5}
        onChangeText={setDescription}
        placeholder={'Enter a discription for the attachment'}/>
      <Button title={'Upload File'} onPress={pickFile}/>
    </View>
  );
};

export default WithCourseNavbar(SubmitAssignmentPage);
