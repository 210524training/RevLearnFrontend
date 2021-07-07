import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { LandingNavParamList, LoginNavParamList, RootNavParamList} from '../../Types/NavigatorTypes';
import LandingPage from '../../screens/LandingPage';
import LoginPage from '../../screens/LoginPage';


const WebStack = createStackNavigator<RootNavParamList>();

function WebRootNavigator() {
  const colorScheme = useColorScheme(); 

  return (
    <WebStack.Navigator
      initialRouteName="LandingNav"
      headerMode={'none'}>
      {/* ScreensFolder */}
      <WebStack.Screen
        name="LandingNav"
        component={LandingStackNavigator}
      />
      <WebStack.Screen
        name="LoginNav"
        component={LoginStackNavigator}
      />
      {/* <WebStack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{}}
      />
      Assignments Pages Folder
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
      Course Info Folder 
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
      Quizzes Folder 
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
       Resources Folder 
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
       Courses Folder 
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
      /> */}
      
    </WebStack.Navigator>
  );
}


const LandingStack = createStackNavigator<LandingNavParamList>();

function LandingStackNavigator() {
  return (
    <LandingStack.Navigator
      headerMode={'none'}>
      <LandingStack.Screen
        name="Landing"
        component={LandingPage}
      />
    </LandingStack.Navigator>
  );
}

const LoginStack = createStackNavigator<LoginNavParamList>();

function LoginStackNavigator() {
  return (
    <LoginStack.Navigator
      headerMode={'none'}>
      <LoginStack.Screen
        name="Login"
        component={LoginPage}
      />
    </LoginStack.Navigator>
  );
}

export default WebRootNavigator;