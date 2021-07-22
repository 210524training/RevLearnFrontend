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
          Landing: {
            screens: {
              Landing: 'Landing',
            },
          },
          Login: {
            screens: {
              Login: 'Login',
            },
          },
          Register: {
            screens: {
              RegisterPage: 'Register',
            },
          },
        },
      },
      Home: {
        screens: {
          // All Users
          HomePage: {
            screens: {
              HomePage: 'HomePage',
            },
          },
          UserInfo: {
            screens: {
              UserInfoPage: 'UserInfoPage',
            },
          },
          Settings: {
            screens: {
              SettingsPage: 'SettingsPage',
            },
          },
          // Admins
          AllUsers: {
            screens: {
              AllUsersPage: 'AllUsersPage',
            },
          },
          AllTeachers: {
            screens: {
              AllTeachersPage: 'AllTeachersPage',
              CreateTeacherPage: 'CreateTeacherPage',
            },
          },
          AllCourses: {
            screens: {
              AllCoursesPage: 'AllCoursesPage',
              CreateCoursePage: 'CreateCoursePage',
            },
          },
          // Students / Teachers
          GradesOverView: {
            screens: {
              GradesOverViewPage: 'GradesOverViewPage',
            },
          },
        },
      },
      CourseHome: {
        screens: {
          CourseHome: {
            screens: {
              CourseHomePage: 'CourseHomePage',
            },
          },
          CourseResources: {
            screens: {
              CourseResourcesPage: 'CourseResourcesPage',
              DetailedResourcePage: 'DetailedResourcePage',
              AddCourseResourcePage: 'AddCourseResourcePage',
            },
          },
          Assignments: {
            screens: {
              AssignmentsPage: 'AssignmentsPage',
              SubmitAssignmentsPage: 'SubmitAssignmentsPage',
              CreateAssignmentPage: 'CreateAssignmentPage',
              AssignmentsSubmissionsPage: 'AssignmentsSubmissionsPage',
              DetaliedSubmissionPage: 'DetaliedSubmissionPage',
            },
          },
          Quizzes: {
            screens: {
              QuizzesPage: 'QuizzesPage',
              QuizPage: 'QuizPage',
              CreateQuizPage: 'CreateQuizPage',
              QuizGradesPage: 'QuizGradesPage',
            },
          },
          CourseGrades: {
            screens: {
              CourseGradesPage: 'CourseGradesPage',
            },
          },
          AdmissionRequests: {
            screens: {
              AdmissionRequestsPage: 'AdmissionRequestsPage',
            },
          },
          Students: {
            screens: {
              StudentsPage: 'StudentsPage',
            },
          },
          AllCourseGrades: {
            screens: {
              AllCourseGradesPage: 'AllCourseGradesPage',
            },
          },
        },
      },
      NotFound: '*',
      Modal: 'Modal',
    },
  },
};
