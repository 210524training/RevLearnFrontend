import React, { useState } from 'react';
import {
  Button, StyleSheet, TextInput, Text, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  loginAsync, logout, selectUser, UserState,
} from '../hooks/slices/user.slice';
import WithNavBar from '../components/higher_order_components/Navbars/WithNavBar';
import { Styles } from '../styles/NavBarStyles';
import { LoginPageStyles } from '../styles/LoginPageStyles';
import { LandingPageStyles } from '../styles/LandingPageStyles';
import { Buttons } from '../styles/Buttons';

const LoginPage: React.FC<unknown> = (props) => {
  const user = useAppSelector<UserState>(selectUser);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    await dispatch(loginAsync({ username, password }));
    navigation.navigate('Home', { screen: 'HomePageNav' });
  };

  return (
    <View style={LandingPageStyles.container}>
      {user ? (
        <>
        </>
      ) : (
        <>
          <Text style={LoginPageStyles.title}>Login</Text>

          <TextInput
            style={LoginPageStyles.inputField}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            defaultValue={username}
          />
          <TextInput
            style={LoginPageStyles.inputField}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
          />
          <View style={Buttons.container}>
            <Button
              onPress={handleLogin}
              title="Sign in"
            />
          </View>

        </>
      )}
    </View>
  );
};

export default WithNavBar(LoginPage);
