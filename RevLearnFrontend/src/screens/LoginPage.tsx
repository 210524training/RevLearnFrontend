import React, { useState } from 'react';
import {
  Text, View, Button, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  loginAsync, logout, selectUser, UserState,
} from '../hooks/slices/user.slice';
import WithNavBar from '../components/higher_order_components/Navbars/WithNavBar';
import { Styles } from '../styles/NavBarStyles';
import { LoginPageStyles } from '../styles/LoginPageStyles';
import { LandingPageStyles } from '../styles/LandingPageStyles';
import { Buttons } from '../styles/Buttons';
import { Container } from '../styles/Container';
import Logo from '../styles/Logo';
import { InputField } from '../styles/InputField';

const LoginPage: React.FC<unknown> = (props) => {
  const user = useAppSelector<UserState>(selectUser);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    await dispatch(loginAsync({ username, password }));
    navigation.navigate('Home', { screen: 'HomePage' });
  };

  return (
    <View style={Container.container}>
      <Logo />
      {user ? (
        <>
          <Text style={LandingPageStyles.header}>Hello, {user.username} </Text>
          <Button
            title="Logout"
            onPress={() => dispatch(logout())}/>
        </>
      ) : (
        <>
          <Text style={LandingPageStyles.header}>Welcome</Text>

          <TextInput
            style={InputField.container}
            label="Username"
            onChangeText={(text) => setUsername(text)}
            defaultValue={username}
          />
          <TextInput
            style={InputField.container}
            secureTextEntry={true}
            label="Password"
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
          />
          <View style={Buttons.container}>
            <Button
              onPress={handleLogin}
              title="Sign in"
            />
          </View>
          <View style={LoginPageStyles.row}>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity>
              <Text style={LoginPageStyles.link} onPress={() => {
                navigation.navigate('Register');
              }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default WithNavBar(LoginPage);
