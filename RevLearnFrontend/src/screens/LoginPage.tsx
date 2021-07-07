import React from "react";
import { useState } from 'react';
import { Button, TextInput, Text, View  } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks';
import { loginAsync, logout, selectUser, UserState } from '../hooks/slices/user.slice';
import WithNavBar from "../components/higher_order_components/WithNavBar";


const LoginPage: React.FC<unknown> = (props) => {
  const user = useAppSelector<UserState>(selectUser);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    await dispatch(loginAsync({ username, password }));
  }
  return (
    <>
    {user ?(
 <>
 <Text >
   Hello, {user.username}!
 </Text>
 <View  />
 <Button
   title="Logout"
   onPress={() => dispatch(logout())}
 ></Button>
</>
):(
  <>
  <Text>Login</Text>

    <TextInput
      placeholder="Username"
      onChangeText={text => setUsername(text)}
      defaultValue={username}
    />
    <TextInput
      placeholder="Password"
      onChangeText={text => setPassword(text)}
      defaultValue={password}
    />

    <Button
      onPress={handleLogin}
      title="Sign in"
    />
    


    </>
)}
</>
)

}
export default WithNavBar(LoginPage);