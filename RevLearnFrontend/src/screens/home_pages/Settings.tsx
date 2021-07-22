import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { updatePassword } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { Buttons } from '../../styles/Buttons';
import { Container } from '../../styles/Container';
import { InputField } from '../../styles/InputField';
import { LandingPageStyles } from '../../styles/LandingPageStyles';

type Props = {

}
const SettingsPage: React.FC<Props> = (props) => {
  const [password, setPassword] = useState<string>('');
  const [password1, setPassword1] = useState<string>('');
  const user = useAppSelector<UserState>(selectUser);

  const handleFormSubmit = () => {
    if(user) {
      updatePassword(password, user.id);
    }
  };

  return (
    <View style={Container.container} >
      <Text>SettingsPage</Text>
      {user
        ? (
          <View style={Container.container} >
            <Text style={LandingPageStyles.header}>{user.username}, Change your password </Text>
            <Text>Enter New Password</Text>
            <TextInput style={InputField.container}
              secureTextEntry={true}
              onChangeText={setPassword} />
            <Text>Confirm Password</Text>
            <TextInput style={InputField.container}
              secureTextEntry={true}
              onChangeText={setPassword1} />
            {password !== password1 ? <Text>Passwords Do Not Match</Text>
              : <View style={Buttons.container} ><Button onPress={handleFormSubmit} title="Submit" /></View>}
          </View>
        )
        : <></>
      }
    </View>
  );
};

export default WithHomeNavbar(SettingsPage);
