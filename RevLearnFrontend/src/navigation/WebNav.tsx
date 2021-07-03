
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { WebStackParamList } from "../@Types/StackParams";
import LandingPage from "../component/pages/LandingPage";
import LoginPage from "../component/pages/LoginPage";

const Stack = createStackNavigator<WebStackParamList>();
function WebNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName = 'LandingPage'
      headerMode={'none'}
    >
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
}

export default WebNavigator;