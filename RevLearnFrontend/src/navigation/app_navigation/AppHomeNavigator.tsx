/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

/* import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { BottomTabParamList, RootHomeNavParamList, HomeNavParamList, LandingNavParamList, LoginNavParamList } from '../../Types/NavigatorTypes';
import LandingPage from '../../screens/LandingPage';
import LoginPage from '../../screens/LoginPage';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNav = createDrawerNavigator<RootHomeNavParamList>();

function AppHomeNavigator() {
  const colorScheme = useColorScheme(); 

  return (
    <DrawerNav.Navigator
      initialRouteName="TabOne"
      >
      <DrawerNav.Screen
        name="TabOne"
        component={HomeNavigator}
        options={{ headerTitle: 'Home Screen' }}
      />
      <DrawerNav.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{ headerTitle: 'Home Screen' }}
      />
    </DrawerNav.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeNav = createStackNavigator<HomeNavParamList>();

function HomeNavigator() {
  return (
    <HomeNav.Navigator>
      <HomeNav.Screen
        name="Home"
        component={LandingPage}
        options={{ headerTitle: 'Home Screen' }}
      />
    </HomeNav.Navigator>
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


export default AppHomeNavigator; */
