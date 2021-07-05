import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, WebStackParamList } from '../Types/NavigatorTypes';
import LandingPage from '../screens/LandingPage';
import LoginPage from '../screens/LoginPage';

const WebStack = createStackNavigator<WebStackParamList>();

function WebNavigator() {
  const colorScheme = useColorScheme(); 

  return (
    <WebStack.Navigator
      initialRouteName="LandingPage"
      headerMode={'none'}>
      <WebStack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{}}
      />
      <WebStack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{}}
      />
      
    </WebStack.Navigator>
  );
}


export default WebNavigator;