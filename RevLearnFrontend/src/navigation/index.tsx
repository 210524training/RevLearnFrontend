 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 import { ColorSchemeName } from 'react-native';

 import { RootStackParamList } from '../types';
 import BottomTabNavigator from './BottomTabNavigator';
 import LinkingConfiguration from './LinkingConfiguration';
 //This is a comment
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }

 const Stack = createStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator  headerMode={'none'}>
       <Stack.Screen name="Root" component={BottomTabNavigator} />
       <Stack.Screen name="ItemView" component={ItemViewScreen} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
     </Stack.Navigator>
   );
 }
