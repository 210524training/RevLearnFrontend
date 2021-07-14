import React from 'react';
import { Text, Button } from 'react-native';
/* import DocumentPicker, { DocumentPickerOptions, PlatformTypes } from 'react-native-document-picker'; */
import * as DocumentPicker from 'expo-document-picker';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { uploadFile } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {

}
const AddResource: React.FC<Props> = (props) => {
  const pickFile = async () => {
    try {
      const result: DocumentPicker.DocumentResult = await DocumentPicker.getDocumentAsync({
        type: 'image/*',
      });
      console.log(result);

      if(result.type === 'success') {
        const body = new FormData();
        console.log(body);

        const { uri, type, name } = result;
        const file = {
          uri,
          type,
          name,
        };

        body.append('file', file);

        uploadFile(body);
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
