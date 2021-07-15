import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { addUser } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {

}
const CreateTeacherAccountPage: React.FC<Props> = (props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleFormSubmit = async () => {
    const role = 'Teacher';
    const id = uuidv4();
    await addUser(username, password, role, id);
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
