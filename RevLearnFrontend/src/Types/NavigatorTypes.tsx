/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  Home: undefined;
  CourseHome: undefined;
  NotFound: undefined;
  Modal: undefined;
};



// Home Navigation Parms
export type RootHomeNavParamList = {
  HomePage: undefined;
  UserInfo: undefined;
  Settings: undefined;
  AllUsers: undefined;
  AllTeachers: undefined;
  AllCourses: undefined;
  GradesOverView: undefined;
};
export type HomePageNavParamList = {
  HomePage: undefined;
};
export type UserInfoNavParamList = {
  UserInfoPage: undefined;
};
export type SettingsNavParamList = {
  SettingsPage: undefined;
};
export type AllUsersNavParamList = {
  AllUsersPage: undefined;
};
export type AllTeachersNavParamList = {
  AllTeachersPage: undefined;
  CreateTeacherPage: undefined;
};
export type AllCoursesNavParamList = {
  AllCoursesPage: undefined;
  CreateCoursePage: undefined;
};
export type GradesOverViewNavParamList = {
  GradesOverViewPage: undefined;
};
//CourseHome
export type HomeNavParamList = {
  CourseHomeNav: undefined;
  CourseResourcesNav: undefined;
  AssignmentsNav: undefined;
  QuizzesNav: undefined;
  CourseInfoNav: undefined;
  CourseGradesNav: undefined;
  AdmissionRequestsNav: undefined;
  StudentsNav: undefined;
  AllCourseGradesNav: undefined;
};

export type CourseHomeNavParamList = {
  CourseHomePage: undefined;
};
export type CourseResourcesNavParamList = {
  CourseResourcesPage: undefined;
  DetailedResourcePage: undefined;
  AddCourseResourcePage: undefined;
};
export type AssignmentsNavParamList = {
  AssignmentsPage: undefined;
  SubmitAssignmentsPage: undefined;
  CreateAssignmentPage: undefined;
  AssignmentsSubmissionsPage: undefined;
  DetaliedSubmissionPage: undefined;
};
export type QuizzesNavParamList = {
  QuizzesPage: undefined;
  QuizPage: undefined;
  CreateQuizPage: undefined;
  QuizGradesPage: undefined;
};
export type CourseInfoNavParamList = {
  CourseInfoPage: undefined;
  UpdateCourseInfoPage: undefined;
};
export type CourseGradesNavParamList = {
  CourseGradesPage: undefined;
};
export type AdmissionRequestsNavParamList = {
  AdmissionRequestsPage: undefined;
};
export type StudentsNavParamList = {
  StudentsPage: undefined;
};
export type AllCourseGradesNavParamList = {
  AllCourseGradesPage: undefined;
};



//Root Tab Navigation params
export type RootNavParamList = {
  LandingNav: undefined;
  LoginNav: undefined;
};

export type LandingNavParamList = {
  Landing: undefined;
};

export type LoginNavParamList = {
  Login: undefined;
};

