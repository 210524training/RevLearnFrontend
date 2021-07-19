import * as React from 'react';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {
  Button, StyleSheet, TextInput, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  loginAsync, logout, selectUser, UserState,
} from '../hooks/slices/user.slice';

import {
  addUser, getAllUsers,
} from '../remote/rev_learn_backend_api/RevLearnUsersAPI';
import WithNavbar from '../components/higher_order_components/Navbars/WithNavBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const RegisterScreen: React.FC<unknown> = (props) => {
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

    if(!result) {
      const id = uuidv4();
      addUser(username, password, role, id);
    }

    if(user) {
      handleLogin();
    } else {
      Alert.alert('Username is already taken.');
    }
  };
  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>
            Hello, {user.username}!
          </Text>
          <View />
          <Button
            title="Logout"
            onPress={() => {
              dispatch(logout());
            }}
          ></Button>
        </>
      ) : (
        <>
          <Text style={styles.title}>Register</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

          <View style={{ width: '100%', padding: 25 }}>
            <TextInput
              style={{ fontSize: 18, margin: 10 }}
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
              defaultValue={username}
            />
            <TextInput
              style={{ fontSize: 18, margin: 10 }}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              defaultValue={password}
            />

            <Button
              onPress={handleRegister}
              title="Register"
            />
            <Text
              style={{
                color: 'blue',
                padding: 10,
                textAlign: 'right',
              }}
              onPress={() => {
                navigation.navigate('Home', { screen: 'HomePage' });
              }}
            >

            </Text>
            <Text
              onPress={() => {
                navigation.navigate('Root', { screen: 'Login' });
              }}
            >Login? </Text>
          </View>
        </>
      )
      }
    </View >
  );
};

export default WithNavbar(RegisterScreen);
