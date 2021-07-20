import React, { useState } from 'react';
import {
  Text, Button, Platform, Image, StyleSheet,
} from 'react-native';
/* import DocumentPicker, { DocumentPickerOptions, PlatformTypes } from 'react-native-document-picker'; */
import * as DocumentPicker from 'expo-document-picker';

import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { getFile, uploadFile } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { useEffect } from 'react';

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
  const [url, setUrl] = useState<string>('');

  /* useEffect(() => {

  }, [url]); */
  const pickFile = async () => {
    try {
      const image: DocumentPicker.DocumentResult = await DocumentPicker.getDocumentAsync({
        type: '*',
      });
      console.log(image);

      if(image.type === 'success') {
        const { uri, type, name } = image;
        const file = {
          uri,
          type,
          name,
        };

        const response = await fetch(uri);
        console.log(response);
        const blob = await response.blob();
        console.log(blob);
        const key = await uploadFile(name, blob);
        setFileKey(key);
        const resultUrl = await getFile(fileKey);
        setUrl(resultUrl);
      }
    } catch(err) {
      console.log(err);
    }
  };
  const downLoad = async () => {
    const resultUrl = await getFile(fileKey);
    setUrl(resultUrl);
  };
  return (
    <>
      <Text>AddResource</Text>
      <Button title={'Upload File'} onPress={pickFile}/>
      <Button title={'DownLoad File'} onPress={downLoad}/>
      <Image style={styles.logo} source={{
        uri: url,
      }}></Image>
    </>
  );
};

export default WithCourseNavbar(AddResource);
