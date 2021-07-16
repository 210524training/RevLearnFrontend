import React from 'react';
import { Text, Button, Platform } from 'react-native';
/* import DocumentPicker, { DocumentPickerOptions, PlatformTypes } from 'react-native-document-picker'; */
import * as DocumentPicker from 'expo-document-picker';

import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { uploadFile } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {

}
const AddResource: React.FC<Props> = (props) => {
  const pickFile = async () => {
    try {
      const image: DocumentPicker.DocumentResult = await DocumentPicker.getDocumentAsync({
        type: 'image/*',
      });
      console.log(image);

      if(image.type === 'success') {
        const formData = new FormData();

        const { uri, type, name } = image;
        const file = {
          uri,
          type,
          name,
        };

        try {
          const response = await fetch(uri);
          console.log(response);
          const blob = await response.blob();
          console.log(blob);
          formData.append('file', blob);
        } catch(err) {
          console.log(err);
        }

        /* body.append('file', file); */
        formData.append('test', 'testing tag');
        /*  formData.append('file', image as Blob); */
        /* formData.append('images', {
          ...image,
          uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
          name: 'image-',
          type: 'image/*', // it may be necessary in Android.
        }); */
        console.log(formData);
        formData.append('testing', 'test');
        uploadFile(formData);
      }
    } catch(err) {
      console.log(err);
    }
    /* try {
      const res = await DocumentPicker.pick<'windows'>({
        type: ['allFiles'],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch(err) {
      if(DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        console.log(err);
      }
    } */
  };
  return (
    <>
      <Text>AddResource</Text>
      <Button title={'Upload File'} onPress={pickFile}/>
    </>
  );
};

export default WithCourseNavbar(AddResource);
