import React from 'react';
import { Button, Text, TextInput } from 'react-native';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}
const SubmitAssignmentPage: React.FC<Props> = (props) => (
  <>
    <Text>SubmitAssignmentPage</Text>
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

export default WithCourseNavbar(SubmitAssignmentPage);
