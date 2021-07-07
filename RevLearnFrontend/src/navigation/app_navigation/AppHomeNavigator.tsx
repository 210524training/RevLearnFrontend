import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import useColorScheme from '../../hooks/useColorScheme';
import { AllCoursesNavParamList, AllTeachersNavParamList, AllUsersNavParamList, GradesOverViewNavParamList, HomePageNavParamList, RootHomeNavParamList, SettingsNavParamList, UserInfoNavParamList } from '../../Types/NavigatorTypes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../../screens/home_pages/HomePage';
import UserInfoPage from '../../screens/home_pages/UserInfo';
import SettingsPage from '../../screens/home_pages/Settings';
import AllUsersPage from '../../screens/home_pages/AllUsersPage';
import AllTeachersPage from '../../screens/home_pages/teachers/AllTeachersPage';
import AllCoursesPage from '../../screens/courses_pages/AllCoursesPage';
import GradesOverviewPage from '../../screens/home_pages/GradesOverviewPage';
import CreateTeacherAccountPage from '../../screens/home_pages/teachers/CreateTeacherAccountPage';
import CreateCoursePage from '../../screens/courses_pages/CreateCoursePage';

const DrawerNav = createDrawerNavigator<RootHomeNavParamList>();

function AppHomeNavigator() {
  const colorScheme = useColorScheme(); 

  return (
    <>
    <DrawerNav.Navigator
      initialRouteName="HomePage"
      >
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
        name="AllUsers"
        component={AllUsersNavigator}
        options={{ headerTitle: 'All Users' }}/>
      <DrawerNav.Screen
        name="AllTeachers"
        component={AllTeachersNavigator}
        options={{ headerTitle: 'All Teachers' }}/>
      <DrawerNav.Screen
        name="AllCourses"
        component={AllCoursesNavigator}
        options={{ headerTitle: 'All Courses' }}/>
      <DrawerNav.Screen
        name="GradesOverView"
        component={GradesOverViewNavigator}
        options={{ headerTitle: 'Grades OverView' }}/>
    </DrawerNav.Navigator>
    </>
  );
}

function HomeNavigator() {
  const HomeNav = createStackNavigator<HomePageNavParamList>();
  return (
    <HomeNav.Navigator>
      <HomeNav.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerTitle: 'Home Page' }}
      />
    </HomeNav.Navigator>
  );
}
function UserInfoNavigator() {
  const UserInfoStack = createStackNavigator<UserInfoNavParamList>();
  return (
    <UserInfoStack.Navigator>
      <UserInfoStack.Screen
        name="UserInfo"
        component={UserInfoPage}
        options={{ headerTitle: 'User Info' }}
      />
    </UserInfoStack.Navigator>
  );
} 
function SettingsNavigator() {
  const SettingsStack = createStackNavigator<SettingsNavParamList>();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsPage}
        options={{ headerTitle: 'Settings' }}
      />
    </SettingsStack.Navigator>
  )
}
function AllUsersNavigator() {
  const AllUsersStack = createStackNavigator<AllUsersNavParamList>();
  return (
    <AllUsersStack.Navigator>
      <AllUsersStack.Screen
        name="AllUsers"
        component={AllUsersPage}
        options={{ headerTitle: 'All Users' }}
      />
    </AllUsersStack.Navigator>
  );
}
function AllTeachersNavigator() {
  const AllTeachersStack = createStackNavigator<AllTeachersNavParamList>();
  return (
    <AllTeachersStack.Navigator>
      <AllTeachersStack.Screen
        name="AllTeachers"
        component={AllTeachersPage}
        options={{ headerTitle: 'All Teachers' }}
      />
      <AllTeachersStack.Screen
        name="CreateTeacher"
        component={CreateTeacherAccountPage}
        options={{ headerTitle: 'Create Teacher' }}
      />
    </AllTeachersStack.Navigator>
  );
}
function AllCoursesNavigator() {
  const AllCoursesStack = createStackNavigator<AllCoursesNavParamList>();
  return (
    <AllCoursesStack.Navigator>
      <AllCoursesStack.Screen
        name="AllCourses"
        component={AllCoursesPage}
        options={{ headerTitle: 'All Courses' }}
      />
      <AllCoursesStack.Screen
        name="CreateCourse"
        component={CreateCoursePage}
        options={{ headerTitle: 'Create Course' }}
      />
    </AllCoursesStack.Navigator>
  );
}
function GradesOverViewNavigator() {
  const GradesOverViewStack = createStackNavigator<GradesOverViewNavParamList>();
  return (
    <GradesOverViewStack.Navigator>
      <GradesOverViewStack.Screen
        name="GradesOverView"
        component={GradesOverviewPage}
        options={{ headerTitle: 'Grades OverView' }}
      />
    </GradesOverViewStack.Navigator>
  );
}


export default AppHomeNavigator; 
