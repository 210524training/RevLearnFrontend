/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootWebStackParamList = {
  Root: undefined;
  Home: undefined;
  NotFound: undefined;
};

export type RootStackParamList = {
  Root: undefined;
  Home: undefined;
  NotFound: undefined;
};



// Home Navigation Parms
export type RootHomeNavParamList = {
  UserInfoNav: undefined;
  SettingsNav: undefined;
  AllUsersNav: undefined;
  AllTeachersNav: undefined;
  AllCoursesNav: undefined;
  GradesOverViewNav: undefined;
};

export type UserInfoNavParamList = {
  UserInfo: undefined;
};
export type SettingsNavParamList = {
  SettingsNav: undefined;
};
export type AllUsersNavParamList = {
  AllUsersNav: undefined;
};
export type AllTeachersNavParamList = {
  AllTeachersNav: undefined;
  CreateTeacher: undefined;
};
export type AllCoursesNavParamList = {
  AllCoursesNav: undefined;
  CreateCourse: undefined;
};
export type GradesOverViewNavParamList = {
  GradesOverViewNav: undefined;
};

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
export type BottomTabParamList = {
  LandingNav: undefined;
  LoginNav: undefined;
};

export type LandingNavParamList = {
  LandingScreen: undefined;
  LoginScreen: undefined;
};

export type LoginNavParamList = {
  LoginScreen: undefined;
};

// Web stack Params
export type WebStackParamList = {
  // Screens Folder
  LandingPage: undefined;
  LoginPage: undefined;
  // Assignments Pages Folder
  AssignmentsPage: undefined;
  AssignmentSubmissionsPage: undefined;
  CreateAssignmentPage: undefined;
  DetailedSubmissionPage: undefined;
  SubmitAssignmentPage: undefined;
  // Course Info Folder
  CourseInfoPage: undefined;
  UpdateCourseInfoPage: undefined;
  // Quizzes Folder
  AllQuizResultsPage: undefined;
  AllQuizzesPage: undefined;
  CreateQuizPage: undefined;
  QuizPage: undefined;
  // Resources Folder
  AddResourcePage: undefined;
  CourseResourcesPage: undefined;
  DetailedResourcePage: undefined;
  UpdateResourcePage: undefined;
  // Courses Folder
  AllCoursesPage: undefined;
  CourseAdmissionRequestsPage: undefined;
  CourseGradesPage: undefined;
  CourseHomePage: undefined;
  CourseStudentsPage: undefined;
  CreateCoursePage: undefined;
};
