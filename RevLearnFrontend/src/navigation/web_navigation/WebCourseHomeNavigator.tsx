import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import useColorScheme from '../../hooks/useColorScheme';
import useNavHeader from '../../hooks/useNavHeader';
import { HomeNavParamList } from '../../types/NavigatorTypes';
import {
  CourseHomeNavigator, CourseResourcesNavigator, AssignmentsNavigator, QuizzesNavigator, CourseInfoNavigator, CourseGradesNavigator, AdmissionRequestsNavigator, AllCourseGradesNavigator, StudentsNavigator,
} from '../StackNavigatiors';

const StackNav = createStackNavigator<HomeNavParamList>();

function AppCourseHomeNavigator() {
  const test: boolean = true;
  const setHeader = useNavHeader();
  return (
    <>
      <StackNav.Navigator
        initialRouteName="CourseHome"
        headerMode={setHeader}>
        <StackNav.Screen
          name="CourseHome"
          component={CourseHomeNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <StackNav.Screen
          name="CourseResources"
          component={CourseResourcesNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <StackNav.Screen
          name="Assignments"
          component={AssignmentsNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <StackNav.Screen
          name="Quizzes"
          component={QuizzesNavigator}
          options={{ headerTitle: 'Home Screen' }}/>
        <StackNav.Screen
          name="CourseGrades"
          component={CourseGradesNavigator}
          options={{ headerTitle: 'Home Screen' }}/>

        {/* If Role=Teacher */}
        {test
          ? (<>
            <StackNav.Screen
              name="Students"
              component={StudentsNavigator}
              options={{ headerTitle: 'Home Screen' }}/>
            <StackNav.Screen
              name="AdmissionRequests"
              component={AdmissionRequestsNavigator}
              options={{ headerTitle: 'Home Screen' }}/>
          </>)
          : <></>
        }
      </StackNav.Navigator>
    </>
  );
}

export default AppCourseHomeNavigator;
