import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { RootNavParamList, LandingNavParamList, LoginNavParamList } from '../../Types/NavigatorTypes';
import LandingPage from '../../screens/LandingPage';
import LoginPage from '../../screens/LoginPage';

const BottomTab = createBottomTabNavigator<RootNavParamList>();

function AppRootNavigator() {
  const colorScheme = useColorScheme(); 

  return (
      <BottomTab.Navigator
        initialRouteName='LandingNav'>
        <BottomTab.Screen
          name="LandingNav"
          component={TabOneNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }}
        />
        <BottomTab.Screen
          name="LoginNav"
          component={TabTwoNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="menu" color={color} />,
          }}
        />
      </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<LandingNavParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Landing"
        component={LandingPage}
        options={{ headerTitle: 'Landing Page' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<LoginNavParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerTitle: 'Login Screen' }}
      />
    </TabTwoStack.Navigator>
  );
}


export default AppRootNavigator;