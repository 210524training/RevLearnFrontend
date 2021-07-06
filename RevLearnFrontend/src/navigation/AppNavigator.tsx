/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../Types/NavigatorTypes';
import LandingPage from '../screens/LandingPage';
import LoginPage from '../screens/LoginPage';

const Drawer = createDrawerNavigator<BottomTabParamList>();

function AppNavigator() {
  const colorScheme = useColorScheme(); 

  return (
    <Drawer.Navigator
      initialRouteName="TabOne"
      
      >
      <Drawer.Screen
        name="TabOne"
        component={TabOneNavigator}
        
      />
      <Drawer.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        
      />
    </Drawer.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="LandingScreen"
        component={LandingPage}
        options={{ headerTitle: 'Home Screen' }}
      />
      <TabOneStack.Screen
        name="LoginScreen"
        component={LoginPage}
        options={{ headerTitle: 'Login Screen' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="LoginScreen"
        component={LoginPage}
        options={{ headerTitle: 'Login Screen' }}
      />
    </TabTwoStack.Navigator>
  );
}


export default AppNavigator;