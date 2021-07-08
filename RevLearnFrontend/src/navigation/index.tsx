import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Platform } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList} from '../Types/NavigatorTypes';
import AppRootNavigator from './app_navigation/AppRootNavigation';
import AppHomeNavigator from './app_navigation/AppHomeNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import WebRootNavigator from './web_navigation/WebRootNavigation';
import WebHomeNavigator from './web_navigation/WebHomeNavigtion';
import AppCourseHomeNavigator from './app_navigation/AppCourseHomeNavigator';
import WebCourseHomeNavigator from './web_navigation/WebCourseHomeNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'light' ?  DefaultTheme : DarkTheme}>
      {Platform.OS === 'web'
        ? <WebBaseNavigator />
        : <AppBaseNavigator />
      }
    </NavigationContainer>
  );
}

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
      <AppStack.Screen name="CourseHome" component={WebCourseHomeNavigator} />
      <WebStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </WebStack.Navigator>
  );
}
