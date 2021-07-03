 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 import { ColorSchemeName, Platform } from 'react-native';
 import { RootStackParamList } from '../@Types/StackParams';
 import BottomTabNavigator from './BottomTabNav';
 import LinkingConfiguration from './LinkingConfig';
import WebNavigator from './WebNav';
 //This is a comment
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
         {Platform.OS === 'web'
           ? <RootWebNavigator />
           : <RootMobileNavigator />
         }
       
     </NavigationContainer>
   );
 }

 const Stack = createStackNavigator<RootStackParamList>();
 
 function RootMobileNavigator() {
   return (
     <Stack.Navigator  headerMode={'none'}>
       <Stack.Screen name="Root" component={BottomTabNavigator} />
     </Stack.Navigator>
   );
 }

 function RootWebNavigator() {
  return (
    <Stack.Navigator  headerMode={'none'}>
      <Stack.Screen name="Root" component={WebNavigator} />
    </Stack.Navigator>
  );
}
