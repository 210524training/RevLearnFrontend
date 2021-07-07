/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          // Screens Folder
          LandingPage: 'LandingPage',
          LoginPage: 'LoginPage',
          // Assignments Pages Folder
          AssignmentsPage: 'AssignmentsPage',
          AssignmentSubmissionsPage: 'AssignmentSubmissionsPage',
          CreateAssignmentPage: 'CreateAssignmentPage',
          DetailedSubmissionPage: 'DetailedSubmissionPage',
          SubmitAssignmentPage: 'LogSubmitAssignmentPageinPage',
          // Course Info Folder
          CourseInfoPage: 'CourseInfoPage',
          UpdateCourseInfoPage: 'UpdateCourseInfoPage',
          // Quizzes Folder
          AllQuizResultsPage: 'AllQuizResultsPage',
          AllQuizzesPage: 'AllQuizzesPage',
          CreateQuizPage: 'CreateQuizPage',
          QuizPage: 'QuizPage',
          // Resources Folder
          AddResourcePage: 'AddResourcePage',
          CourseResouresPage: 'CourseResourcesPage',
          DetailedResourcePage: 'DetailedResourcePage',
          UpdateResourcePage: 'UpdateResourcePage',
          // Courses Folder
          AllCoursesPage: 'AllCoursesPage',
          CourseAdmissionRequestsPage: 'CourseAdmissionRequestsPage',
          CourseGradesPage: 'CourseGradesPage',
          CourseHomePage: 'CourseHomePage',
          CourseStudentsPage: 'CourseStudentsPage',
          CreateCoursePage: 'CreateCoursePage',
        },
      },
      NotFound: '*',
    },
  },
};
