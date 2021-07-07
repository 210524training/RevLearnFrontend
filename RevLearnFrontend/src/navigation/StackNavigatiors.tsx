import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePageNavParamList, UserInfoNavParamList, SettingsNavParamList, AllUsersNavParamList, AllTeachersNavParamList, AllCoursesNavParamList, GradesOverViewNavParamList, AdmissionRequestsNavParamList, AllCourseGradesNavParamList, AssignmentsNavParamList, CourseGradesNavParamList, CourseInfoNavParamList, CourseResourcesNavParamList, QuizzesNavParamList, StudentsNavParamList } from "../Types/NavigatorTypes";
import AllCoursesPage from "../screens/courses_pages/AllCoursesPage";
import CreateCoursePage from "../screens/courses_pages/CreateCoursePage";
import AllUsersPage from "../screens/home_pages/AllUsersPage";
import GradesOverviewPage from "../screens/home_pages/GradesOverviewPage";
import HomePage from "../screens/home_pages/HomePage";
import SettingsPage from "../screens/home_pages/Settings";
import AllTeachersPage from "../screens/home_pages/teachers/AllTeachersPage";
import CreateTeacherAccountPage from "../screens/home_pages/teachers/CreateTeacherAccountPage";
import UserInfoPage from "../screens/home_pages/UserInfo";
import AssignmentsPage from "../screens/courses_pages/assignments/AssignmentsPage";
import AssignmentsSubmissionsPage from "../screens/courses_pages/assignments/AssignmentSubmissionsPage";
import CreateAssignmentPage from "../screens/courses_pages/assignments/CreateAssignmentPage";
import DetailedSubmissionPage from "../screens/courses_pages/assignments/DetailedSubmissionPage";
import SubmitAssignmentPage from "../screens/courses_pages/assignments/SubmitAssignmentPage";
import CourseAdmissionReouetsPage from "../screens/courses_pages/CourseAdmissionRequestsPage";
import CourseGradesPage from "../screens/courses_pages/CourseGradesPage";
import CourseStudentsPage from "../screens/courses_pages/CourseStudentsPage";
import CourseInfoPage from "../screens/courses_pages/course_info/CourseInfoPage";
import UpdateCourseInfoPage from "../screens/courses_pages/course_info/UpdateCourseInfoPage";
import AllQuizzesPage from "../screens/courses_pages/quizzes/AllQuizzesPage";
import QuizPage from "../screens/courses_pages/quizzes/QuizPage";
import AddResource from "../screens/courses_pages/resources/AddResourcePage";
import CourseResourcesPage from "../screens/courses_pages/resources/CourseResourcesPage";
import DetailedResourcePage from "../screens/courses_pages/resources/DetailedResourcePage";

//Home navigation stack navigators
export function HomeNavigator() {
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
export function UserInfoNavigator() {
  const UserInfoStack = createStackNavigator<UserInfoNavParamList>();
  return (
    <UserInfoStack.Navigator>
      <UserInfoStack.Screen
        name="UserInfoPage"
        component={UserInfoPage}
        options={{ headerTitle: 'User Info' }}
      />
    </UserInfoStack.Navigator>
  );
} 
export function SettingsNavigator() {
  const SettingsStack = createStackNavigator<SettingsNavParamList>();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{ headerTitle: 'Settings' }}
      />
    </SettingsStack.Navigator>
  )
}
export function AllUsersNavigator() {
  const AllUsersStack = createStackNavigator<AllUsersNavParamList>();
  return (
    <AllUsersStack.Navigator>
      <AllUsersStack.Screen
        name="AllUsersPage"
        component={AllUsersPage}
        options={{ headerTitle: 'All Users' }}
      />
    </AllUsersStack.Navigator>
  );
}
export function AllTeachersNavigator() {
  const AllTeachersStack = createStackNavigator<AllTeachersNavParamList>();
  return (
    <AllTeachersStack.Navigator>
      <AllTeachersStack.Screen
        name="AllTeachersPage"
        component={AllTeachersPage}
        options={{ headerTitle: 'All Teachers' }}
      />
      <AllTeachersStack.Screen
        name="CreateTeacherPage"
        component={CreateTeacherAccountPage}
        options={{ headerTitle: 'Create Teacher' }}
      />
    </AllTeachersStack.Navigator>
  );
}
export function AllCoursesNavigator() {
  const AllCoursesStack = createStackNavigator<AllCoursesNavParamList>();
  return (
    <AllCoursesStack.Navigator>
      <AllCoursesStack.Screen
        name="AllCoursesPage"
        component={AllCoursesPage}
        options={{ headerTitle: 'All Courses' }}
      />
      <AllCoursesStack.Screen
        name="CreateCoursePage"
        component={CreateCoursePage}
        options={{ headerTitle: 'Create Course' }}
      />
    </AllCoursesStack.Navigator>
  );
}
export function GradesOverViewNavigator() {
  const GradesOverViewStack = createStackNavigator<GradesOverViewNavParamList>();
  return (
    <GradesOverViewStack.Navigator>
      <GradesOverViewStack.Screen
        name="GradesOverViewPage"
        component={GradesOverviewPage}
        options={{ headerTitle: 'Grades OverView' }}
      />
    </GradesOverViewStack.Navigator>
  );
}

// Course home navigation stack navigators
export function CourseHomeNavigator() {
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
export function CourseResourcesNavigator() {
  const CourseResourcesStack = createStackNavigator<CourseResourcesNavParamList>();
  return (
    <CourseResourcesStack.Navigator>
      <CourseResourcesStack.Screen
        name="CourseResourcesPage"
        component={CourseResourcesPage}
        options={{ headerTitle: 'Course Resources' }}
      />
      <CourseResourcesStack.Screen
        name="DetailedResourcePage"
        component={DetailedResourcePage}
        options={{ headerTitle: 'Detailed Resource' }}
      />
      <CourseResourcesStack.Screen
        name="AddCourseResourcePage"
        component={AddResource}
        options={{ headerTitle: 'Add Course Resource' }}
      />
    </CourseResourcesStack.Navigator>
  );
}
export function AssignmentsNavigator() {
  const AssignmentsStack = createStackNavigator<AssignmentsNavParamList>();
  return (
    <AssignmentsStack.Navigator>
      <AssignmentsStack.Screen
        name="AssignmentsPage"
        component={AssignmentsPage}
        options={{ headerTitle: 'Assignments' }}
      />
      <AssignmentsStack.Screen
        name="SubmitAssignmentsPage"
        component={SubmitAssignmentPage}
        options={{ headerTitle: 'Submit Assignments' }}
      />
      <AssignmentsStack.Screen
        name="CreateAssignmentPage"
        component={CreateAssignmentPage}
        options={{ headerTitle: 'Create Assignment' }}
      />
      <AssignmentsStack.Screen
        name="AssignmentsSubmissionsPage"
        component={AssignmentsSubmissionsPage}
        options={{ headerTitle: 'Assignments Submissions' }}
      />
      <AssignmentsStack.Screen
        name="DetaliedSubmissionPage"
        component={DetailedSubmissionPage}
        options={{ headerTitle: 'Detalied Submission' }}
      />
    </AssignmentsStack.Navigator>
  );
}
export function QuizzesNavigator() {
  const QuizzesStack = createStackNavigator<QuizzesNavParamList>();
  return (
    <QuizzesStack.Navigator>
      <QuizzesStack.Screen
        name="QuizzesPage"
        component={AllQuizzesPage}
        options={{ headerTitle: 'Quizzes' }}
      />
      <QuizzesStack.Screen
        name="QuizPage"
        component={QuizPage}
        options={{ headerTitle: 'Quiz' }}
      />
    </QuizzesStack.Navigator>
  );
}
export function CourseInfoNavigator() {
  const CourseInfoStack = createStackNavigator<CourseInfoNavParamList>();
  return (
    <CourseInfoStack.Navigator>
      <CourseInfoStack.Screen
        name="CourseInfoPage"
        component={CourseInfoPage}
        options={{ headerTitle: 'Course Info' }}
      />
      <CourseInfoStack.Screen
        name="UpdateCourseInfoPage"
        component={UpdateCourseInfoPage}
        options={{ headerTitle: 'Update Course Info' }}
      />
    </CourseInfoStack.Navigator>
  );
}
export function CourseGradesNavigator() {
  const CourseGradesStack = createStackNavigator<CourseGradesNavParamList>();
  return (
    <CourseGradesStack.Navigator>
      <CourseGradesStack.Screen
        name="CourseGradesPage"
        component={CourseGradesPage}
        options={{ headerTitle: 'Course Grades' }}
      />
    </CourseGradesStack.Navigator>
  );
}
export function AdmissionRequestsNavigator() {
  const AdmissionRequestsStack = createStackNavigator<AdmissionRequestsNavParamList>();
  return (
    <AdmissionRequestsStack.Navigator>
      <AdmissionRequestsStack.Screen
        name="AdmissionRequestsPage"
        component={CourseAdmissionReouetsPage}
        options={{ headerTitle: 'Admission Requests' }}
      />
    </AdmissionRequestsStack.Navigator>
  );
}
export function StudentsNavigator() {
  const StudentsStack = createStackNavigator<StudentsNavParamList>();
  return (
    <StudentsStack.Navigator>
      <StudentsStack.Screen
        name="StudentsPage"
        component={CourseStudentsPage}
        options={{ headerTitle: 'StudentsPage' }}
      />
    </StudentsStack.Navigator>
  );
}
export function AllCourseGradesNavigator() {
  const AllCourseGradesStack = createStackNavigator<AllCourseGradesNavParamList>();
  return (
    <AllCourseGradesStack.Navigator>
      <AllCourseGradesStack.Screen
        name="AllCourseGradesPage"
        component={AllCoursesPage}
        options={{ headerTitle: 'All Course Grades' }}
      />
    </AllCourseGradesStack.Navigator>
  );
}