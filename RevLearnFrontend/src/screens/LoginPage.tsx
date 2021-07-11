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

          <Button
            color="#00B2D4"
            onPress={handleLogin}
            title="Sign in"
          />

        </>
      )}
    </View>
  );
};

export default WithNavBar(LoginPage);
