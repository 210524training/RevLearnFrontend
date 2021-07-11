import React, { useState } from 'react';
import {
  Button, Text, TextInput, View,
} from 'react-native';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { updatePassword } from '../../remote/RevLearnBackendAPI';

type Props = {

}
const SettingsPage: React.FC<Props> = (props) => {
  const [password, setPassword] = useState<string>('');
  const [password1, setPassword1] = useState<string>('');
  const user = useAppSelector<UserState>(selectUser);

  const handleFormSubmit = () => {
    updatePassword(password, user.userID);
  };

  return (
    <>
      <Text>SettingsPage</Text>
      {user
        ? (
          <View>
            <Text>{user.username} Change your password </Text>
            <Text>Enter New Password</Text>
            <TextInput style={{ borderWidth: 1 }} secureTextEntry={true} onChangeText={setPassword} />
            <Text>Confirm Password</Text>
            <TextInput style={{ borderWidth: 1 }} secureTextEntry={true} onChangeText={setPassword1} />
            {password !== password1 ? <Text>Passwords Do Not Match</Text>
              : <Button onPress={handleFormSubmit} title="Submit" />}
          </View>
        )
        : <></>
      }
    </>
  );
};

export default WithHomeNavbar(SettingsPage);
