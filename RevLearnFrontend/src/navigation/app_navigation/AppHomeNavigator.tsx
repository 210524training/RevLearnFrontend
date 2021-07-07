import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import useColorScheme from '../../hooks/useColorScheme';
import { RootHomeNavParamList } from '../../Types/NavigatorTypes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AllCoursesNavigator, AllTeachersNavigator, AllUsersNavigator, GradesOverViewNavigator, HomeNavigator, SettingsNavigator, UserInfoNavigator } from '../StackNavigatiors';

const DrawerNav = createDrawerNavigator<RootHomeNavParamList>();

function AppHomeNavigator() {
  const colorScheme = useColorScheme(); 

  return (
    <>
    <DrawerNav.Navigator
      initialRouteName="HomePage">
      <DrawerNav.Screen
        name="HomePage"
        component={HomeNavigator}
        options={{ headerTitle: 'Home Screen' }}/>
      <DrawerNav.Screen
        name="UserInfo"
        component={UserInfoNavigator}
        options={{ headerTitle: 'User Info' }}/> 
      <DrawerNav.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{ headerTitle: 'Settings' }}/>
      <DrawerNav.Screen
        name="GradesOverView"
        component={GradesOverViewNavigator}
        options={{ headerTitle: 'Grades OverView' }}/>
      <DrawerNav.Screen
        name="AllCourses"
        component={AllCoursesNavigator}
        options={{ headerTitle: 'All Courses' }}/>
      {/* If Role=Admin */}
      {true 
        ? (<>
          <DrawerNav.Screen
            name="AllUsers"
            component={AllUsersNavigator}
            options={{ headerTitle: 'All Users' }}/>
          <DrawerNav.Screen
            name="AllTeachers"
            component={AllTeachersNavigator}
            options={{ headerTitle: 'All Teachers' }}/>
        </>)
        : <></>
      }
      
      
      
    </DrawerNav.Navigator>
    </>
  );
}



export default AppHomeNavigator; 
