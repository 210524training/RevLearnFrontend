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
  UserInfo: undefined;
};
export type SettingsNavParamList = {
  Settings: undefined;
};
export type AllUsersNavParamList = {
  AllUsers: undefined;
};
export type AllTeachersNavParamList = {
  AllTeachers: undefined;
  CreateTeacher: undefined;
};
export type AllCoursesNavParamList = {
  AllCourses: undefined;
  CreateCourse: undefined;
};
export type GradesOverViewNavParamList = {
  GradesOverView: undefined;
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
  CourseHome: undefined;
};
export type CourseResourcesNavParamList = {
  GradesOverViewNav: undefined;
  DetailedResource: undefined;
  AddCourseresource: undefined;
};
export type AssignmentsNavParamList = {
  Assignments: undefined;
  SubmitAssignments: undefined;
  CreateAssignment: undefined;
  AssignmentsSubmissions: undefined;
  DetaliedSubmission: undefined;
};
export type QuizzesNavParamList = {
  Quizzes: undefined;
  QuizPage: undefined;
};
export type CourseInfoNavParamList = {
  CourseInfo: undefined;
  UpdateCourseInfo: undefined;
};
export type CourseGradesNavParamList = {
  CourseGrades: undefined;
};
export type AdmissionRequestsNavParamList = {
  AdmissionRequests: undefined;
};
export type StudentsNavParamList = {
  Students: undefined;
};
export type AllCourseGradesNavParamList = {
  AllCourseGrades: undefined;
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

