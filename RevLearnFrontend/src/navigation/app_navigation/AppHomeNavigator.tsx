/* eslint-disable no-alert */
import * as React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Icon } from 'react-native-elements';
import useColorScheme from '../../hooks/useColorScheme';
import { RootHomeNavParamList } from '../../types/NavigatorTypes';
import {
  AllCoursesNavigator, AllTeachersNavigator, AllUsersNavigator, GradesOverViewNavigator, HomeNavigator, SettingsNavigator, UserInfoNavigator,
} from '../StackNavigatiors';
import DrawerIcon from '../../components/web_navbar/DrawerIcon';

/* const navigationOptions = ({ navigation }) => ({
  headerTitle: 'Home',
  headerLeft: (
    < Icon name="menu" size={30} style={{ marginStart: 10 }} backgroundColor="#000000" onPress={() => navigation.openDrawer()} > </Icon>
  ),
});
 */
const DrawerNav = createDrawerNavigator<RootHomeNavParamList>();

function AppHomeNavigator() {
  const colorScheme = useColorScheme();

  return (
    <>
      <DrawerNav.Navigator
        initialRouteName="HomePage"
        drawerPosition= 'right'
      >
        <DrawerNav.Screen
          name="HomePage"
          component={HomeNavigator}
        />
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
