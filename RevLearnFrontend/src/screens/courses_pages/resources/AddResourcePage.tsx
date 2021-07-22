/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import {
  Text, Button, Platform, StyleSheet, View,
} from 'react-native';
/* import DocumentPicker, { DocumentPickerOptions, PlatformTypes } from 'react-native-document-picker'; */
import * as DocumentPicker from 'expo-document-picker';

import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { uploadFile } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { Attachment } from '../../../models/Attachment';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { Course } from '../../../models/Course';
import { updateCourse } from '../../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { LandingPageStyles } from '../../../styles/LandingPageStyles';
import { Buttons } from '../../../styles/Buttons';

type Props = {

}

const AddResource: React.FC<Props> = (props) => {
  const [fileKey, setFileKey] = useState<string>('');
  const [discription, setDescription] = useState<string>('');
  const [inputName, setName] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const course = useAppSelector<CourseState>(getCourse);
  const navigation = useNavigation();

  /* useEffect(() => {

  }, [url]); */
  const pickFile = async () => {
    try {
      const file: DocumentPicker.DocumentResult = await DocumentPicker.getDocumentAsync({
        type: '*/*',
      });

      if(file.type === 'success') {
        const { uri, type, name } = file;
        console.log(type);
        const response = await fetch(Platform.OS === 'android' ? `file://${uri}` : uri);
        const blob = await response.blob();
        const key = await uploadFile(name, blob);
        const fileType = name.split('.');
        const attachment: Attachment = {
          key,
          name: inputName,
          discription,
          type: fileType[fileType.length - 1],
        };
        const updatedCourse: Course = course as Course;
        updatedCourse.resources[0] ? updatedCourse.resources.push(attachment) : updatedCourse.resources = [attachment];

        updateCourse(updatedCourse);
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
      <Text style={LandingPageStyles.headerFont}>Resource Name: </Text>
      <TextInput onChangeText={(event) => { setName(event); }} placeholder='Textbook'/>
      <Text style={LandingPageStyles.headerFont}>Resource Description: </Text>
      <TextInput
        multiline={true}
        numberOfLines={5}
        onChangeText={(event) => { setDescription(event); }}
        placeholder={'Enter a description of the the attachment'}/>
      <View style={Buttons.container}>
        <Button title={'Upload File'} onPress={pickFile}/>
      </View>

    </>
  );
};

export default WithCourseNavbar(AddResource);
