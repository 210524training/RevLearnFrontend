import * as React from 'react';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {
  Text, View, Button, Alert, TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  loginAsync, logout, selectUser, UserState,
} from '../hooks/slices/user.slice';
import { Container } from '../styles/Container';
import {
  addUser, getAllUsers,
} from '../remote/rev_learn_backend_api/RevLearnUsersAPI';
import WithNavbar from '../components/higher_order_components/Navbars/WithNavBar';
import { LandingPageStyles } from '../styles/LandingPageStyles';
import { InputField } from '../styles/InputField';
import Logo from '../styles/Logo';
import { Buttons } from '../styles/Buttons';
import { LoginPageStyles } from '../styles/LoginPageStyles';

const RegisterScreen: React.FC<unknown> = () => {
  const user = useAppSelector<UserState>(selectUser);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    await dispatch(loginAsync({ username, password }));
    navigation.navigate('Home', { screen: 'HomePageNav' });
  };

  const handleRegister = async () => {
    const role = 'Student';
    const users = await getAllUsers();
    const result = users.find((u) => u.username === username);

    console.log(result);
    if(!result) {
      const id = uuidv4();
      await addUser(username, password, role, id);
      await handleLogin();
    } else {
      Alert.alert('Username is already taken.');
    }
  };

  return (
    <View style={Container.container}>
      <Logo />
      {user ? (
        <>
          <Text style={LandingPageStyles.header}>
            Hello, {user.username}!
          </Text>
          <Button
            title="Logout"
            onPress={() => dispatch(logout())}/>
        </>
      ) : (
        <>
          <Text style={LandingPageStyles.header}>Register</Text>
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
          <View style={Buttons.container}>
            <Button
              onPress={handleRegister}
              title="Register"
            />
          </View>

          <View style={LoginPageStyles.row}>
            <Text>Already have an account? </Text>
            <TouchableOpacity>
              <Text style={LoginPageStyles.link} onPress={() => {
                navigation.navigate('Login');
              }}>Sign In Here!</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default WithNavbar(RegisterScreen);
