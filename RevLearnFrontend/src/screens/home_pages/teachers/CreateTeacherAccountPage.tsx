import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { TextInput, Button } from 'react-native-paper';
import { addUser } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { Container } from '../../../styles/Container';
import { InputField } from '../../../styles/InputField';
import { LandingPageStyles } from '../../../styles/LandingPageStyles';
import { Buttons } from '../../../styles/Buttons';

type Props = {

}
const CreateTeacherAccountPage: React.FC<Props> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation();

  const handleFormSubmit = async () => {
    const role = 'Teacher';
    const id = uuidv4();
    await addUser(username, password, role, id);
    navigation.navigate('AllTeachersPage');
  };

  return (
    <View style={Container.container}>
      <Text style={LandingPageStyles.header}>Please fill in the following fields</Text>
      <TextInput
        style={ InputField.container }
        label="Username"
        onChangeText={(text) => setUsername(text)}
        defaultValue={username}
      />
      <TextInput
        style={ InputField.container }
        secureTextEntry={true}
        label="Password"
        onChangeText={(text) => setPassword(text)}
        defaultValue={password}
      />
      <TextInput
        style={ InputField.container }
        value='Teacher'
        label="Role"
        editable={false}
      />
      <View style={Buttons.container}>
        <Button mode="contained" color="#19D9FF" onPress={handleFormSubmit}>Create Teacher</Button>
      </View>
    </View>
  );
};

export default CreateTeacherAccountPage;
