/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Platform } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootWebStackParamList } from '../Types/NavigatorTypes';
import AppRootNavigator from './app_navigation/AppRootNavigation';
import AppHomeNavigator from './app_navigation/AppHomeNavigator';
import AppLinkingConfiguration from './app_navigation/AppLinkingConfiguration';
import WebNavigator from './WebNavigator';
import WebLinkingConfiguration from './WebLinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <>
      {Platform.OS === 'web'
        ? (<NavigationContainer
            linking={WebLinkingConfiguration}
            theme={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
            <WebRootNavigator />
          </NavigationContainer>
        )
        : (
          <NavigationContainer
            linking={AppLinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <AppBaseNavigator />
            
          </NavigationContainer>
        ) 
      }
    </>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const AppStack = createStackNavigator<RootStackParamList>();

function AppBaseNavigator() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Root" component={AppRootNavigator} />
      <AppStack.Screen name="Home" component={AppHomeNavigator} />
      <AppStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </AppStack.Navigator>
  );
}

const WebStack = createStackNavigator<RootWebStackParamList>();
function WebRootNavigator() {
  return (
    <WebStack.Navigator screenOptions={{ headerShown: false }}>
      <WebStack.Screen name="Root" component={WebNavigator} />
      <WebStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </WebStack.Navigator>
  );
}
