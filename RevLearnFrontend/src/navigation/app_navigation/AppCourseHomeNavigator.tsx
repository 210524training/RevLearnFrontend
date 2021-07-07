import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import useColorScheme from '../../hooks/useColorScheme';
import { HomePageNavParamList, HomeNavParamList, AdmissionRequestsNavParamList, AllCourseGradesNavParamList, AssignmentsNavParamList, CourseGradesNavParamList, CourseInfoNavParamList, CourseResourcesNavParamList, QuizzesNavParamList, StudentsNavParamList } from '../../Types/NavigatorTypes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../../screens/home_pages/HomePage';
import CourseResourcesPage from '../../screens/courses_pages/resources/CourseResourcesPage';
import AssignmentsPage from '../../screens/courses_pages/assignments/AssignmentsPage';
import QuizPage from '../../screens/courses_pages/quizzes/QuizPage';
import CourseInfoPage from '../../screens/courses_pages/course_info/CourseInfoPage';
import CourseGradesPage from '../../screens/courses_pages/CourseGradesPage';
import CourseAdmissionReouetsPage from '../../screens/courses_pages/CourseAdmissionRequestsPage';
import CourseStudentsPage from '../../screens/courses_pages/CourseStudentsPage';
import AllCoursesPage from '../../screens/courses_pages/AllCoursesPage';
import LoginPage from '../../screens/LoginPage';
import DetailedResourcePage from '../../screens/courses_pages/resources/DetailedResourcePage';
import AddResource from '../../screens/courses_pages/resources/AddResourcePage';
import SubmitAssignmentPage from '../../screens/courses_pages/assignments/SubmitAssignmentPage';
import CreateAssignmentPage from '../../screens/courses_pages/assignments/CreateAssignmentPage';
import AssignmentsSubmissionsPage from '../../screens/courses_pages/assignments/AssignmentSubmissionsPage';
import DetailedSubmissionPage from '../../screens/courses_pages/assignments/DetailedSubmissionPage';
import AllQuizzesPage from '../../screens/courses_pages/quizzes/AllQuizzesPage';
import UpdateCourseInfoPage from '../../screens/courses_pages/course_info/UpdateCourseInfoPage';
import { CourseHomeNavigator, CourseResourcesNavigator, AssignmentsNavigator, QuizzesNavigator, CourseInfoNavigator, CourseGradesNavigator, AdmissionRequestsNavigator, AllCourseGradesNavigator, StudentsNavigator } from '../StackNavigatiors';

const DrawerNav = createDrawerNavigator<HomeNavParamList>();

function AppCourseHomeNavigator() {
  const colorScheme = useColorScheme(); 
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
