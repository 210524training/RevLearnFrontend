import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { HomePageNavParamList, RootHomeNavParamList } from '../../Types/NavigatorTypes';
import LandingPage from '../../screens/LandingPage';
import LoginPage from '../../screens/LoginPage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../../screens/home_pages/HomePage';

const RootStackNav = createStackNavigator<RootHomeNavParamList>();

function WebHomeNavigator() {
  const colorScheme = useColorScheme(); 

  return (
    <>
    <RootStackNav.Navigator
      initialRouteName="HomePage"
      headerMode={'none'}
      >
      <RootStackNav.Screen
        name="HomePage"
        component={HomeNavigator}
        options={{ headerTitle: 'Home Screen' }}
      />
      {/* <RootStackNav.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{ headerTitle: 'Home Screen' }}
      /> */}
    </RootStackNav.Navigator>
    </>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}


const HomeNav = createStackNavigator<HomePageNavParamList>();

function HomeNavigator() {
  return (
    <HomeNav.Navigator
      headerMode={'none'}>
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


export default WebHomeNavigator; 