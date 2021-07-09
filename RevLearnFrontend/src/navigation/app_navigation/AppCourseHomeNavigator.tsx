import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import useColorScheme from '../../hooks/useColorScheme';
import { HomeNavParamList } from '../../Types/NavigatorTypes';
import {
  CourseHomeNavigator, CourseResourcesNavigator, AssignmentsNavigator, QuizzesNavigator, CourseInfoNavigator, CourseGradesNavigator, AdmissionRequestsNavigator, AllCourseGradesNavigator, StudentsNavigator,
} from '../StackNavigatiors';

const DrawerNav = createDrawerNavigator<HomeNavParamList>();

function AppCourseHomeNavigator() {
  const test: boolean = false;
  return (
    <>
      <DrawerNav.Navigator
        initialRouteName="CourseHomeNav"
      >
        <DrawerNav.Screen
          name="CourseHomeNav"
          component={CourseHomeNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <DrawerNav.Screen
          name="CourseResourcesNav"
          component={CourseResourcesNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <DrawerNav.Screen
          name="AssignmentsNav"
          component={AssignmentsNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <DrawerNav.Screen
          name="QuizzesNav"
          component={QuizzesNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <DrawerNav.Screen
          name="CourseInfoNav"
          component={CourseInfoNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <DrawerNav.Screen
          name="CourseGradesNav"
          component={CourseGradesNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        {/* If Role=Teacher */}
        {test
          ? (<>
            <DrawerNav.Screen
              name="StudentsNav"
              component={StudentsNavigator}
              options={{ headerTitle: 'Home Screen' }}/>
            <DrawerNav.Screen
              name="AllCourseGradesNav"
              component={AllCourseGradesNavigator}
              options={{ headerTitle: 'All Course Grades' }}/>
            <DrawerNav.Screen
              name="AdmissionRequestsNav"
              component={AdmissionRequestsNavigator}
              options={{ headerTitle: 'Home Screen' }}/>
          </>)
          : <></>
        }
      </DrawerNav.Navigator>
    </>
  );
}

export default AppCourseHomeNavigator;
