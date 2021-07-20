import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import useColorScheme from '../../hooks/useColorScheme';
import { HomeNavParamList } from '../../types/NavigatorTypes';
import {
  CourseHomeNavigator, CourseResourcesNavigator, AssignmentsNavigator, QuizzesNavigator, CourseInfoNavigator, CourseGradesNavigator, AdmissionRequestsNavigator, AllCourseGradesNavigator, StudentsNavigator,
} from '../StackNavigatiors';

const DrawerNav = createDrawerNavigator<HomeNavParamList>();

function AppCourseHomeNavigator() {
  const test: boolean = false;
  return (
    <>
      <DrawerNav.Navigator
        initialRouteName="CourseHome"
      >
        <DrawerNav.Screen
          name="CourseHome"
          component={CourseHomeNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <DrawerNav.Screen
          name="CourseResources"
          component={CourseResourcesNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <DrawerNav.Screen
          name="Assignments"
          component={AssignmentsNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <DrawerNav.Screen
          name="Quizzes"
          component={QuizzesNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <DrawerNav.Screen
          name="CourseInfo"
          component={CourseInfoNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <DrawerNav.Screen
          name="CourseGrades"
          component={CourseGradesNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        {/* If Role=Teacher */}
        {test
          ? (<>
            <DrawerNav.Screen
              name="Students"
              component={StudentsNavigator}
              options={{ headerTitle: 'Home Screen' }}/>
            <DrawerNav.Screen
              name="AllCourseGrades"
              component={AllCourseGradesNavigator}
              options={{ headerTitle: 'All Course Grades' }}/>
            <DrawerNav.Screen
              name="AdmissionRequests"
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
