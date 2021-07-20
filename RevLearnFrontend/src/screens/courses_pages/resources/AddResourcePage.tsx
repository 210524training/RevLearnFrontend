/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import {
  Text, Button, Platform, Image, StyleSheet,
} from 'react-native';
/* import DocumentPicker, { DocumentPickerOptions, PlatformTypes } from 'react-native-document-picker'; */
import * as DocumentPicker from 'expo-document-picker';

import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { getFile, uploadFile } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';

import { Attachment } from '../../../models/Attachment';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { Course } from '../../../models/Course';
import { updateCourse } from '../../../remote/rev_learn_backend_api/RevLearnCoursesAPI';

type Props = {

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const AddResource: React.FC<Props> = (props) => {
  const [fileKey, setFileKey] = useState<string>('');
  const [discription, setDiscription] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const course = useAppSelector<CourseState>(getCourse);
  const navigation = useNavigation();

  /* useEffect(() => {

  }, [url]); */
  const pickFile = async () => {
    try {
      const file: DocumentPicker.DocumentResult = await DocumentPicker.getDocumentAsync({
        type: 'image/*',
      });

      if(file.type === 'success') {
        const { uri, type, name } = file;

        const response = await fetch(uri);
        const blob = await response.blob();
        const key = await uploadFile(name, blob);

        const attachment: Attachment = {
          key,
          name,
          discription,
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
      <Text>AddResource</Text>
      <Text>Resource Name: </Text>
      <TextInput onChangeText={(event) => { setName(event); }} placeholder='Textbook'/>
      <Text>Resource Discription: </Text>
      <TextInput
        multiline={true}
        numberOfLines={5}
        onChangeText={(event) => { setDiscription(event); }}
        placeholder={'Enter a discription of the the attachment'}/>
      <Button title={'Upload File'} onPress={pickFile}/>
    </>
  );
};

export default WithCourseNavbar(AddResource);
