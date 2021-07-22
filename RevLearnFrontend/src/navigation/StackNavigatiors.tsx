/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, useColorScheme } from 'react-native';
import {
  HomePageNavParamList, UserInfoNavParamList, SettingsNavParamList, AllUsersNavParamList, AllTeachersNavParamList, AllCoursesNavParamList, GradesOverViewNavParamList, AdmissionRequestsNavParamList, AllCourseGradesNavParamList, AssignmentsNavParamList, CourseGradesNavParamList, CourseInfoNavParamList, CourseResourcesNavParamList, QuizzesNavParamList, StudentsNavParamList, CourseHomeNavParamList,
} from '../types/NavigatorTypes';
import AllCoursesPage from '../screens/home_pages/AllCoursesPage';
import CreateCoursePage from '../screens/courses_pages/CreateCoursePage';
import AllUsersPage from '../screens/home_pages/AllUsersPage';
import GradesOverviewPage from '../screens/home_pages/GradesOverviewPage';
import HomePage from '../screens/home_pages/HomePage';
import SettingsPage from '../screens/home_pages/Settings';
import AllTeachersPage from '../screens/home_pages/teachers/AllTeachersPage';
import CreateTeacherAccountPage from '../screens/home_pages/teachers/CreateTeacherAccountPage';
import UserInfoPage from '../screens/home_pages/UserInfo';
import AssignmentsPage from '../screens/courses_pages/assignments/AssignmentsPage';
import AssignmentsSubmissionsPage from '../screens/courses_pages/assignments/AssignmentSubmissionsPage';
import CreateAssignmentPage from '../screens/courses_pages/assignments/CreateAssignmentPage';
import DetailedSubmissionPage from '../screens/courses_pages/assignments/DetailedSubmissionPage';
import SubmitAssignmentPage from '../screens/courses_pages/assignments/SubmitAssignmentPage';
import CourseAdmissionReouetsPage from '../screens/courses_pages/CourseAdmissionRequestsPage';
import CourseGradesPage from '../screens/courses_pages/CourseGradesPage';
import CourseStudentsPage from '../screens/courses_pages/CourseStudentsPage';
import CourseInfoPage from '../screens/courses_pages/course_info/CourseInfoPage';
import UpdateCourseInfoPage from '../screens/courses_pages/course_info/UpdateCourseInfoPage';
import AllQuizzesPage from '../screens/courses_pages/quizzes/AllQuizzesPage';
import QuizPage from '../screens/courses_pages/quizzes/QuizPage';
import AddResource from '../screens/courses_pages/resources/AddResourcePage';
import CourseResourcesPage from '../screens/courses_pages/resources/CourseResourcesPage';
import DetailedResourcePage from '../screens/courses_pages/resources/DetailedResourcePage';
import useNavHeader from '../hooks/useNavHeader';
import CreateQuizPage from '../screens/courses_pages/quizzes/CreateQuizPage';
import AllQuizResultsPage from '../screens/courses_pages/quizzes/AllQuizResultsPage';
import CourseHomePage from '../screens/courses_pages/CourseHomePage';
import AllCourseGradesPage from '../screens/courses_pages/AllCourseGradesPage';
import DrawerIcon from '../components/web_navbar/DrawerIcon';

// Home navigation stack navigators
export function HomeNavigator() {
  const HomeNav = createStackNavigator<HomePageNavParamList>();
  const setHeader = useNavHeader();
  const colorScheme = useColorScheme();
  return (
    <HomeNav.Navigator
      initialRouteName='HomePage'
      headerMode={setHeader}>
      <HomeNav.Screen
        name="HomePage"
        component={HomePage}
        options={({ navigation }) => ({
          headerTitle: 'Home Page',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </HomeNav.Navigator>
  );
}

export function UserInfoNavigator() {
  const UserInfoStack = createStackNavigator<UserInfoNavParamList>();
  const setHeader = useNavHeader();
  return (
    <UserInfoStack.Navigator
      initialRouteName='UserInfoPage'
      headerMode={setHeader}>
      <UserInfoStack.Screen
        name="UserInfoPage"
        component={UserInfoPage}
        options={({ navigation }) => ({
          headerTitle: 'User Info',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </UserInfoStack.Navigator>
  );
}
export function SettingsNavigator() {
  const SettingsStack = createStackNavigator<SettingsNavParamList>();
  const setHeader = useNavHeader();
  return (
    <SettingsStack.Navigator
      initialRouteName='SettingsPage'
      headerMode={setHeader}>
      <SettingsStack.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={({ navigation }) => ({
          headerTitle: 'Settings',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </SettingsStack.Navigator>
  );
}
export function AllUsersNavigator() {
  const AllUsersStack = createStackNavigator<AllUsersNavParamList>();
  const setHeader = useNavHeader();
  return (
    <AllUsersStack.Navigator
      initialRouteName='AllUsersPage'
      headerMode={setHeader}>
      <AllUsersStack.Screen
        name="AllUsersPage"
        component={AllUsersPage}
        options={({ navigation }) => ({
          headerTitle: 'All Users',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </AllUsersStack.Navigator>
  );
}
export function AllTeachersNavigator() {
  const AllTeachersStack = createStackNavigator<AllTeachersNavParamList>();
  const setHeader = useNavHeader();
  return (
    <AllTeachersStack.Navigator
      initialRouteName='AllTeachersPage'
      headerMode={setHeader}>
      <AllTeachersStack.Screen
        name="AllTeachersPage"
        component={AllTeachersPage}
        options={({ navigation }) => ({
          headerTitle: 'All Teachers',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
      <AllTeachersStack.Screen
        name="CreateTeacherPage"
        component={CreateTeacherAccountPage}
        options={({ navigation }) => ({
          headerTitle: 'Create Teacher',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </AllTeachersStack.Navigator>
  );
}
export function AllCoursesNavigator() {
  const AllCoursesStack = createStackNavigator<AllCoursesNavParamList>();
  const setHeader = useNavHeader();
  return (
    <AllCoursesStack.Navigator
      initialRouteName='AllCoursesPage'
      headerMode={setHeader}>
      <AllCoursesStack.Screen
        name="AllCoursesPage"
        component={AllCoursesPage}
        options={({ navigation }) => ({
          headerTitle: 'All Courses',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
      <AllCoursesStack.Screen
        name="CreateCoursePage"
        component={CreateCoursePage}
        options={({ navigation }) => ({
          headerTitle: 'Create Course',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </AllCoursesStack.Navigator>
  );
}
export function GradesOverViewNavigator() {
  const GradesOverViewStack = createStackNavigator<GradesOverViewNavParamList>();
  const setHeader = useNavHeader();
  return (
    <GradesOverViewStack.Navigator
      initialRouteName='GradesOverViewPage'
      headerMode={setHeader}>
      <GradesOverViewStack.Screen
        name="GradesOverViewPage"
        component={GradesOverviewPage}
        options={({ navigation }) => ({
          headerTitle: 'Grades OverView',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </GradesOverViewStack.Navigator>
  );
}

// Course home navigation stack navigators
export function CourseHomeNavigator() {
  const HomeNav = createStackNavigator<CourseHomeNavParamList>();
  const setHeader = useNavHeader();
  console.log('Course Home Nav Navigating...');
  return (
    <HomeNav.Navigator
      initialRouteName='CourseHomePage'
      headerMode={setHeader}>
      <HomeNav.Screen
        name="CourseHomePage"
        component={CourseHomePage}
        options={({ navigation }) => ({
          headerTitle: 'Course HomePage',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </HomeNav.Navigator>
  );
}
export function CourseResourcesNavigator() {
  const CourseResourcesStack = createStackNavigator<CourseResourcesNavParamList>();
  const setHeader = useNavHeader();
  return (
    <CourseResourcesStack.Navigator
      initialRouteName='CourseResourcesPage'
      headerMode={setHeader}>
      <CourseResourcesStack.Screen
        name="CourseResourcesPage"
        component={CourseResourcesPage}
        options={({ navigation }) => ({
          headerTitle: 'Course Resources',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
      <CourseResourcesStack.Screen
        name="DetailedResourcePage"
        component={DetailedResourcePage}
        options={({ navigation }) => ({
          headerTitle: 'Detailed Resource',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
      <CourseResourcesStack.Screen
        name="AddCourseResourcePage"
        component={AddResource}
        options={({ navigation }) => ({
          headerTitle: 'Add Course Resource',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </CourseResourcesStack.Navigator>
  );
}
export function AssignmentsNavigator() {
  const AssignmentsStack = createStackNavigator<AssignmentsNavParamList>();
  const setHeader = useNavHeader();
  return (
    <AssignmentsStack.Navigator
      initialRouteName='AssignmentsPage'
      headerMode={setHeader}>
      <AssignmentsStack.Screen
        name="AssignmentsPage"
        component={AssignmentsPage}
        options={({ navigation }) => ({
          headerTitle: 'Assignments',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
      <AssignmentsStack.Screen
        name="SubmitAssignmentsPage"
        component={SubmitAssignmentPage}
        options={({ navigation }) => ({
          headerTitle: 'Submit Assignments',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
      <AssignmentsStack.Screen
        name="CreateAssignmentPage"
        component={CreateAssignmentPage}
        options={({ navigation }) => ({
          headerTitle: 'Create Assignment',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
      <AssignmentsStack.Screen
        name="AssignmentsSubmissionsPage"
        component={AssignmentsSubmissionsPage}
        options={({ navigation }) => ({
          headerTitle: 'Assignments Submissions',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
      <AssignmentsStack.Screen
        name="DetaliedSubmissionPage"
        component={DetailedSubmissionPage}
        options={({ navigation }) => ({
          headerTitle: 'Detalied Submission',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </AssignmentsStack.Navigator>
  );
}
export function QuizzesNavigator() {
  const QuizzesStack = createStackNavigator<QuizzesNavParamList>();
  const setHeader = useNavHeader();
  return (
    <QuizzesStack.Navigator
      initialRouteName='QuizzesPage'
      headerMode={setHeader}>
      <QuizzesStack.Screen
        name="QuizzesPage"
        component={AllQuizzesPage}
        options={({ navigation }) => ({
          headerTitle: 'Quizzes',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
      <QuizzesStack.Screen
        name="QuizPage"
        component={QuizPage}
        options={({ navigation }) => ({
          headerTitle: 'Quiz',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
      <QuizzesStack.Screen
        name="CreateQuizPage"
        component={CreateQuizPage}
        options={({ navigation }) => ({
          headerTitle: 'Create Quiz',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
      <QuizzesStack.Screen
        name="QuizGradesPage"
        component={AllQuizResultsPage}
        options={({ navigation }) => ({
          headerTitle: 'Quiz Grades',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </QuizzesStack.Navigator>
  );
}
export function CourseInfoNavigator() {
  const CourseInfoStack = createStackNavigator<CourseInfoNavParamList>();
  const setHeader = useNavHeader();
  return (
    <CourseInfoStack.Navigator
      initialRouteName='CourseInfoPage'
      headerMode={setHeader}>
      <CourseInfoStack.Screen
        name="CourseInfoPage"
        component={CourseInfoPage}
        options={({ navigation }) => ({
          headerTitle: 'Course Info',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
      <CourseInfoStack.Screen
        name="UpdateCourseInfoPage"
        component={UpdateCourseInfoPage}
        options={({ navigation }) => ({
          headerTitle: 'Update Course Info',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </CourseInfoStack.Navigator>
  );
}
export function CourseGradesNavigator() {
  const CourseGradesStack = createStackNavigator<CourseGradesNavParamList>();
  const setHeader = useNavHeader();
  return (
    <CourseGradesStack.Navigator
      initialRouteName='CourseGradesPage'
      headerMode={setHeader}>
      <CourseGradesStack.Screen
        name="CourseGradesPage"
        component={CourseGradesPage}
        options={({ navigation }) => ({
          headerTitle: 'Course Grades',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </CourseGradesStack.Navigator>
  );
}
export function AdmissionRequestsNavigator() {
  const AdmissionRequestsStack = createStackNavigator<AdmissionRequestsNavParamList>();
  const setHeader = useNavHeader();
  return (
    <AdmissionRequestsStack.Navigator
      initialRouteName='AdmissionRequestsPage'
      headerMode={setHeader}>
      <AdmissionRequestsStack.Screen
        name="AdmissionRequestsPage"
        component={CourseAdmissionReouetsPage}
        options={({ navigation }) => ({
          headerTitle: 'Admission Requests',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </AdmissionRequestsStack.Navigator>
  );
}
export function StudentsNavigator() {
  const StudentsStack = createStackNavigator<StudentsNavParamList>();
  const setHeader = useNavHeader();
  return (
    <StudentsStack.Navigator
      initialRouteName='StudentsPage'
      headerMode={setHeader}>
      <StudentsStack.Screen
        name="StudentsPage"
        component={CourseStudentsPage}
        options={({ navigation }) => ({
          headerTitle: 'Students Page',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </StudentsStack.Navigator>
  );
}
export function AllCourseGradesNavigator() {
  const AllCourseGradesStack = createStackNavigator<AllCourseGradesNavParamList>();
  const setHeader = useNavHeader();
  return (
    <AllCourseGradesStack.Navigator
      initialRouteName='AllCourseGradesPage'
      headerMode={setHeader}>
      <AllCourseGradesStack.Screen
        name="AllCourseGradesPage"
        component={AllCourseGradesPage}
        options={({ navigation }) => ({
          headerTitle: 'All Course Grades',
          headerRight: (props) => {
            return <DrawerIcon navigation={navigation}/>;
          },
        })}
      />
    </AllCourseGradesStack.Navigator>
  );
}
