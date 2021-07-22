/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import {
  Text, Platform, StyleSheet,
} from 'react-native';
/* import DocumentPicker, { DocumentPickerOptions, PlatformTypes } from 'react-native-document-picker'; */
import * as DocumentPicker from 'expo-document-picker';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { uploadFile } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';

import { Attachment } from '../../../models/Attachment';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { Course } from '../../../models/Course';
import { updateCourse } from '../../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { View } from '../../../components/Themed';
import { AddResourceStyles } from '../../../styles/ResourceStyles';
import B from '../../../components/BoldText';

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
    <View style={AddResourceStyles.container}>
      {Platform.OS === 'web' && <B input={'Add Resource'}/>}
      <Text style={AddResourceStyles.item}>Resource Name: </Text>
      <TextInput style={AddResourceStyles.inputItem} onChangeText={(event) => { setName(event); }} placeholder='Textbook'/>
      <Text style={AddResourceStyles.item}>Resource Discription: </Text>
      <TextInput
        style={AddResourceStyles.inputItemMulti}
        multiline={true}
        numberOfLines={5}
        onChangeText={(event) => { setDiscription(event); }}
        placeholder={'Enter a discription of the the attachment'}/>
      <Button
        style={AddResourceStyles.item}
        color='#00B2D4'
        mode={'contained'}
        onPress={pickFile}
      >
        Upload File
      </Button>
    </View>
  );
};

export default WithCourseNavbar(AddResource);
