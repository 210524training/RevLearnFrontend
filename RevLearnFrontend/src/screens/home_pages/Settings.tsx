import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login, selectUser, UserState } from '../../hooks/slices/user.slice';
import { User } from '../../models/User';
import { updateUser } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { Buttons } from '../../styles/Buttons';
import { Container } from '../../styles/Container';
import { InputField } from '../../styles/InputField';
import { LandingPageStyles } from '../../styles/LandingPageStyles';

type Props = {

}

const SettingsPage: React.FC<Props> = () => {
  const [password, setPassword] = useState<string>('');
  const [password1, setPassword1] = useState<string>('');
  const user = useAppSelector<UserState>(selectUser);

  const dispatch = useAppDispatch();

  const handleFormSubmit = async () => {
    if(user && password === password1 && password.length > 0) {
      const updatedUser: User = {
        ...user,
        password,
      };
      await updateUser(updatedUser);
      dispatch(login(updatedUser));
    }
  };

  return (
    <View style={Container.container} >
      <Text>Settings Page</Text>
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
            {
              password !== password1 ? (
                <Text>Passwords Do Not Match</Text>
              ) : (
                <View style={Buttons.container} >
                  <Button mode="contained" color="#19D9FF" onPress={handleFormSubmit}>Submit</Button>
                </View>
              )
            }
          </View>
        )
        : <></>
      }
    </View>
  );
};

export default WithHomeNavbar(SettingsPage);
