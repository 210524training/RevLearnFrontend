import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import {
  LandingNavParamList, LoginNavParamList, RegisterNavParamList, RootNavParamList,
} from '../../types/NavigatorTypes';
import LandingPage from '../../screens/LandingPage';
import LoginPage from '../../screens/LoginPage';
import RegisterPage from '../../screens/RegisterPage';

const LandingStack = createStackNavigator<LandingNavParamList>();

function LandingStackNavigator() {
  return (
    <LandingStack.Navigator
      headerMode={'none'}>
      <LandingStack.Screen
        name="Landing"
        component={LandingPage}
      />
    </LandingStack.Navigator>
  );
}

const LoginStack = createStackNavigator<LoginNavParamList>();

function LoginStackNavigator() {
  return (
    <LoginStack.Navigator
      headerMode={'none'}>
      <LoginStack.Screen
        name="Login"
        component={LoginPage}
      />
    </LoginStack.Navigator>
  );
}

function RegisterStackNavigator() {
  const RegisterStack = createStackNavigator<RegisterNavParamList>();
  return (
    <RegisterStack.Navigator
      headerMode={'none'}>
      <RegisterStack.Screen
        name="Register"
        component={RegisterPage}
      />
    </RegisterStack.Navigator>
  );
}

const WebStack = createStackNavigator<RootNavParamList>();

function WebRootNavigator() {
  const colorScheme = useColorScheme();

  return (
    <WebStack.Navigator
      initialRouteName="LandingNav"
      headerMode={'none'}>
      {/* ScreensFolder */}
      <WebStack.Screen
        name="LandingNav"
        component={LandingStackNavigator}
      />
      <WebStack.Screen
        name="LoginNav"
        component={LoginStackNavigator}
      />
      <WebStack.Screen
        name="RegisterNav"
        component={LoginStackNavigator}
      />
    </WebStack.Navigator>
  );
}

export default WebRootNavigator;
