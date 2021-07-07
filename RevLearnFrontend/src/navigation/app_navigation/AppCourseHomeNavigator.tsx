import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import useColorScheme from '../../hooks/useColorScheme';
import { HomePageNavParamList, RootHomeNavParamList } from '../../Types/NavigatorTypes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../../screens/home_pages/HomePage';

const DrawerNav = createDrawerNavigator<RootHomeNavParamList>();

function AppCourseHomeNavigator() {
  const colorScheme = useColorScheme(); 

  return (
    <>
    <DrawerNav.Navigator
      initialRouteName="HomePage"
      >
      <DrawerNav.Screen
        name="HomePage"
        component={HomeNavigator}
        options={{ headerTitle: 'Home Screen' }}
      />
      {/* <DrawerNav.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{ headerTitle: 'Home Screen' }}
      /> */}
    </DrawerNav.Navigator>
    </>
  );
}

const HomeNav = createStackNavigator<HomePageNavParamList>();

function HomeNavigator() {
  return (
    <HomeNav.Navigator>
      <HomeNav.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerTitle: 'Home Page' }}
      />
    </HomeNav.Navigator>
  );
}

/* const TabTwoStack = createStackNavigator<TabTwoParamList>();

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
} */


export default AppCourseHomeNavigator; 
