import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform } from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import { HomePageNavParamList, RootHomeNavParamList } from '../../types/NavigatorTypes';
import {
  UserInfoNavigator, SettingsNavigator, GradesOverViewNavigator, AllCoursesNavigator, AllUsersNavigator, AllTeachersNavigator, HomeNavigator,
} from '../StackNavigatiors';

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
          component={HomeNavigator}/>

        <RootStackNav.Screen
          name="UserInfo"
          component={UserInfoNavigator}/>
        <RootStackNav.Screen
          name="Settings"
          component={SettingsNavigator}/>
        <RootStackNav.Screen
          name="GradesOverView"
          component={GradesOverViewNavigator}/>
        <RootStackNav.Screen
          name="AllCourses"
          component={AllCoursesNavigator}/>
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
