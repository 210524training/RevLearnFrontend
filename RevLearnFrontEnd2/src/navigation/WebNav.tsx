import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { WebStackParamList } from "../Types";
import LandingPage from "../components/pages/LandingPage";
import LoginPage from "../components/pages/LoginPage";


function WebNavigator() {
  const Stack = createStackNavigator<WebStackParamList>();
  return (
    <Stack.Navigator 
      initialRouteName = 'LoginPage'
      headerMode={'none'}
    >
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
}

export default WebNavigator;