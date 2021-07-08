import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import useColorScheme from '../../hooks/useColorScheme';
import { HomePageNavParamList, RootHomeNavParamList } from '../../Types/NavigatorTypes';
import HomePage from '../../screens/home_pages/HomePage';
import { UserInfoNavigator, SettingsNavigator, GradesOverViewNavigator, AllCoursesNavigator, AllUsersNavigator, AllTeachersNavigator, HomeNavigator } from '../StackNavigatiors';
import { Platform } from 'react-native';
import { StackHeaderMode } from '@react-navigation/stack/lib/typescript/src/types';

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
        options={{ headerTitle: 'Home Screen' }}/>

      <RootStackNav.Screen
        name="UserInfo"
        component={UserInfoNavigator}
        options={{ headerTitle: 'User Info' }}/> 
      <RootStackNav.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{ headerTitle: 'Settings' }}/>
      <RootStackNav.Screen
        name="GradesOverView"
        component={GradesOverViewNavigator}
        options={{ headerTitle: 'Grades OverView' }}/>
      <RootStackNav.Screen
        name="AllCourses"
        component={AllCoursesNavigator}
        options={{ headerTitle: 'All Courses' }}/>
      {/* If Role=Admin */}
      {true 
        ? (<>
          <RootStackNav.Screen
            name="AllUsers"
            component={AllUsersNavigator}
            options={{ headerTitle: 'All Users' }}/>
          <RootStackNav.Screen
            name="AllTeachers"
            component={AllTeachersNavigator}
            options={{ headerTitle: 'All Teachers' }}/>
        </>)
        : <></>
      }
    </RootStackNav.Navigator>
    </>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}


export default WebHomeNavigator; 