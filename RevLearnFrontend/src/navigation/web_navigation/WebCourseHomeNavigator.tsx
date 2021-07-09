import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import useColorScheme from '../../hooks/useColorScheme';
import { useNavHeader } from '../../hooks/useNavHeader';
import {HomeNavParamList } from '../../Types/NavigatorTypes';
import { CourseHomeNavigator, CourseResourcesNavigator, AssignmentsNavigator, QuizzesNavigator, CourseInfoNavigator, CourseGradesNavigator, AdmissionRequestsNavigator, AllCourseGradesNavigator, StudentsNavigator } from '../StackNavigatiors';

const StackNav = createStackNavigator<HomeNavParamList>();

function AppCourseHomeNavigator() {
  const test: boolean = true;
  const setHeader = useNavHeader()
  return (
    <>
    <StackNav.Navigator
      initialRouteName="CourseHomeNav"
      headerMode={setHeader}>
      <StackNav.Screen
        name="CourseHomeNav"
        component={CourseHomeNavigator}
        options={{ headerTitle: 'Home Screen' }}/>
      <StackNav.Screen
        name="CourseResourcesNav"
        component={CourseResourcesNavigator}
        options={{ headerTitle: 'Home Screen' }}/>
      <StackNav.Screen
        name="AssignmentsNav"
        component={AssignmentsNavigator}
        options={{ headerTitle: 'Home Screen' }}/>
      <StackNav.Screen
        name="QuizzesNav"
        component={QuizzesNavigator}
        options={{ headerTitle: 'Home Screen' }}/>
      <StackNav.Screen
        name="CourseInfoNav"
        component={CourseInfoNavigator}
        options={{ headerTitle: 'Home Screen' }}/>
      <StackNav.Screen
        name="CourseGradesNav"
        component={CourseGradesNavigator}
        options={{ headerTitle: 'Home Screen' }}/>
      
      {/* If Role=Teacher */}
      {test 
        ? (<>
          <StackNav.Screen
            name="StudentsNav"
            component={StudentsNavigator}
            options={{ headerTitle: 'Home Screen' }}/>
          <StackNav.Screen
            name="AllCourseGradesNav"
            component={AllCourseGradesNavigator}
            options={{ headerTitle: 'All Course Grades' }}/>
          <StackNav.Screen
            name="AdmissionRequestsNav"
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
