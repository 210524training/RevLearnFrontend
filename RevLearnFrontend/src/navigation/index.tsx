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
import { RootStackParamList} from '../Types/NavigatorTypes';
import AppRootNavigator from './app_navigation/AppRootNavigation';
import AppHomeNavigator from './app_navigation/AppHomeNavigator';
import AppLinkingConfiguration from './app_navigation/AppLinkingConfiguration';
import WebRootNavigator from './web_navigation/WebRootNavigation';
import WebLinkingConfiguration from './web_navigation/WebLinkingConfiguration';
import WebHomeNavigator from './web_navigation/WebHomeNavigtion';
import AppCourseHomeNavigator from './app_navigation/AppCourseHomeNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <>
      {Platform.OS === 'web'
        ? (<NavigationContainer
            linking={WebLinkingConfiguration}
            theme={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
            <WebBaseNavigator />
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
      <AppStack.Screen name="CourseHome" component={AppCourseHomeNavigator} />
      <AppStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </AppStack.Navigator>
  );
}

const WebStack = createStackNavigator<RootStackParamList>();
function WebBaseNavigator() {
  return (
    <WebStack.Navigator screenOptions={{ headerShown: false }}>
      <WebStack.Screen name="Root" component={WebRootNavigator} />
      <AppStack.Screen name="Home" component={WebHomeNavigator} />
      <WebStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </WebStack.Navigator>
  );
}
