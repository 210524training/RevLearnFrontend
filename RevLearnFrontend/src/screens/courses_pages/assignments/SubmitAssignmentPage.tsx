import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';
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

        const response = await fetch(uri);
        const blob = await response.blob();
        const key = await uploadFile(name, blob);

        const attachment: Attachment = {
          key,
          name: inputName,
          discription: description,
          type,
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
    <>
      <Text>{assignment?.title}</Text>
      <Text>Description: {assignment?.description}</Text>
      <Text>Due Date: {assignment?.dueDate}</Text>

      <Text>New Submission:</Text>
      <Text>Submission Name: </Text>
      <TextInput onChangeText={(event) => { setName(event); }} placeholder='My submission'/>
      <Text>Discription: </Text>
      <TextInput
        multiline={true}
        numberOfLines={5}
        onChangeText={setDescription}
        placeholder={'Enter a discription for the attachment'}/>
      <Button title={'Upload File'} onPress={pickFile}/>
    </>
  );
};

export default WithCourseNavbar(SubmitAssignmentPage);
