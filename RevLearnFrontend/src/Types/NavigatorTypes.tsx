/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  LandingScreen: undefined;
  LoginScreen: undefined;
};

export type TabTwoParamList = {
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
