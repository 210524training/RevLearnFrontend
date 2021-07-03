 import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import * as React from 'react';
import { ColorSchemeName, Platform, View } from 'react-native';
import LandingPage from '../components/pages/LandingPage';
import LoginPage from '../components/pages/LoginPage';
import { RootStackParamList } from '../Types';
import AppNavigator from './AppNav';
import LinkingConfiguration from './LinkingConfig';
import WebNavigator from './WebNav';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  
  return (
    <>
    <View style={{ flex: 1 }}>
      <NavigationContainer 
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          
          {/* Platform.OS === 'web'
            ? <RootWebNavigator />
            : <RootMobileNavigator />
          }   */}
      <RootWebNavigator /> 
      
      </NavigationContainer> 
    </View>
    
    </>
  );

  
 /* 
  function RootMobileNavigator() {
    return (
      <Stack.Navigator  headerMode={'none'}>
        <Stack.Screen name="Root" component={AppNavigator} />
      </Stack.Navigator>
    );
  }*/
  
  function RootWebNavigator() { 
    const Stack = createStackNavigator<RootStackParamList>();
    return (
      <>
       <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Root" component={WebNavigator} /> 
        <Stack.Screen name="Test" component={LoginPage} /> 
      </Stack.Navigator> 
       {/* <LoginPage/>  */}
      </>
    );
  } 
}
