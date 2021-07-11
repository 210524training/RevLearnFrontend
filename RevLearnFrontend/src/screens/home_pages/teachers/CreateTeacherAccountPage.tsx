import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';
import { createNewTeacher } from '../../../remote/RevLearnBackendAPI';

type Props = {

}
const CreateTeacherAccountPage: React.FC<Props> = (props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('Teacher');

  const handleFormSubmit = async () => {
    await createNewTeacher(username, password, role);
  };

  return (
    <>
      <Text>Username:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setUsername} />
      <Text>Password:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setPassword} />
      <Text>Role:</Text>
      <TextInput style={{ borderWidth: 1 }} value='Teacher' editable={false}/>
      <Button onPress={handleFormSubmit} title="Submit" />
    </>
  );
};

export default CreateTeacherAccountPage;
