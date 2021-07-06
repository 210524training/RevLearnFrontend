import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, WebStackParamList } from '../Types/NavigatorTypes';
import LandingPage from '../screens/LandingPage';
import LoginPage from '../screens/LoginPage';
import AssignmentsPage from '../screens/courses_pages/assignments/AssignmentsPage';
import AssignmentSubmissionsPage from '../screens/courses_pages/assignments/AssignmentSubmissionsPage';
import AllCoursesPage from '../screens/courses_pages/AllCoursesPage';
import DetailedSubmissionPage from '../screens/courses_pages/assignments/DetailedSubmissionPage';
import SubmitAssignmentPage from '../screens/courses_pages/assignments/SubmitAssignmentPage';
import CourseAdmissionRequestsPage from '../screens/courses_pages/CourseAdmissionRequestsPage';
import CourseGradesPage from '../screens/courses_pages/CourseGradesPage';
import CourseHomePage from '../screens/courses_pages/CourseHomePage';
import CourseStudentsPage from '../screens/courses_pages/CourseStudentsPage';
import CourseInfoPage from '../screens/courses_pages/course_info/CourseInfoPage';
import UpdateCourseInfoPage from '../screens/courses_pages/course_info/UpdateCourseInfoPage';
import CreateCoursePage from '../screens/courses_pages/CreateCoursePage';
import AllQuizResultsPage from '../screens/courses_pages/quizzes/AllQuizResultsPage';
import AllQuizzesPage from '../screens/courses_pages/quizzes/AllQuizzesPage';
import CreateQuizPage from '../screens/courses_pages/quizzes/CreateQuizPage';
import QuizPage from '../screens/courses_pages/quizzes/QuizPage';
import AddResourcePage from '../screens/courses_pages/resources/AddResourcePage';
import DetailedResourcePage from '../screens/courses_pages/resources/DetailedResourcePage';
import UpdateResourcePage from '../screens/courses_pages/resources/UpdateResourcePage';
import CourseResourcesPage from '../screens/courses_pages/resources/CourseResourcesPage';
import CreateAssignmentPage from '../screens/courses_pages/assignments/CreateAssignmentPage';

const WebStack = createStackNavigator<WebStackParamList>();

function WebNavigator() {
  const colorScheme = useColorScheme(); 

  return (
    <WebStack.Navigator
      initialRouteName="LandingPage"
      headerMode={'none'}>
      {/* ScreensFolder */}
      <WebStack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{}}
      />
      <WebStack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{}}
      />
      {/* Assignments Pages Folder */}
      <WebStack.Screen
        name="AssignmentsPage"
        component={AssignmentsPage}
        options={{}}
      />
      <WebStack.Screen
        name="AssignmentSubmissionsPage"
        component={AssignmentSubmissionsPage}
        options={{}}
      />
      <WebStack.Screen
        name="CreateAssignmentPage"
        component={CreateAssignmentPage}
        options={{}}
      />
      <WebStack.Screen
        name="DetailedSubmissionPage"
        component={DetailedSubmissionPage}
        options={{}}
      />
      <WebStack.Screen
        name="SubmitAssignmentPage"
        component={SubmitAssignmentPage}
        options={{}}
      />
      {/* Course Info Folder */}
      <WebStack.Screen
        name="CourseInfoPage"
        component={CourseInfoPage}
        options={{}}
      />
      <WebStack.Screen
        name="UpdateCourseInfoPage"
        component={UpdateCourseInfoPage}
        options={{}}
      />
      {/* Quizzes Folder */}
      <WebStack.Screen
        name="AllQuizResultsPage"
        component={AllQuizResultsPage}
        options={{}}
      />
      <WebStack.Screen
        name="AllQuizzesPage"
        component={AllQuizzesPage}
        options={{}}
      />
      <WebStack.Screen
        name="CreateQuizPage"
        component={CreateQuizPage}
        options={{}}
      />
      <WebStack.Screen
        name="QuizPage"
        component={QuizPage}
        options={{}}
      />
      {/* Resources Folder */}
      <WebStack.Screen
        name="AddResourcePage"
        component={AddResourcePage}
        options={{}}
      />
      <WebStack.Screen
        name="CourseResourcesPage"
        component={CourseResourcesPage}
        options={{}}
      />
      <WebStack.Screen
        name="DetailedResourcePage"
        component={DetailedResourcePage}
        options={{}}
      />
      <WebStack.Screen
        name="UpdateResourcePage"
        component={UpdateResourcePage}
        options={{}}
      />
      {/* Courses Folder */}
      <WebStack.Screen
        name="AllCoursesPage"
        component={AllCoursesPage}
        options={{}}
      />
      <WebStack.Screen
        name="CourseAdmissionRequestsPage"
        component={CourseAdmissionRequestsPage}
        options={{}}
      />
      <WebStack.Screen
        name="CourseGradesPage"
        component={CourseGradesPage}
        options={{}}
      />
      <WebStack.Screen
        name="CourseHomePage"
        component={CourseHomePage}
        options={{}}
      />
      <WebStack.Screen
        name="CourseStudentsPage"
        component={CourseStudentsPage}
        options={{}}
      />
      <WebStack.Screen
        name="CreateCoursePage"
        component={CreateCoursePage}
        options={{}}
      />
      
    </WebStack.Navigator>
  );
}


export default WebNavigator;