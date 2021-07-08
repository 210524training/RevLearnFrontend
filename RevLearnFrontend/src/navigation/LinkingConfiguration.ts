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
          LandingNav: {
            screens: {
              Landing: 'Landing',
            },
          },
          LoginNav: {
            screens: {
              Login: 'Login',
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
            }
          },
          UserInfo: {
            screens: {
              UserInfo: 'UserInfo',
            },
          },
          Settings: {
            screens: {
              Settings: 'Settings',
            },
          },
          // Admins
          AllUsers: {
            screens: {
              AllUsers: 'AllUsers',
            },
          },
          AllTeachers: {
            screens: {
              AllTeachers: 'AllTeachers',
              CreateTeacher: 'CreateTeacher',
            },
          },
          AllCourses: {
            screens: {
              AllCourses: 'AllCourses',
              CreateCourse: 'CreateCourse',
            },
          },
          // Students / Teachers
          GradesOverView: {
            screens: {
              GradesOverView: 'GradesOverView',
            },
          },        
        },
      },
      CourseHome: {
        screens: {
          CourseHomeNav: {
            screens: {
              CourseHomePage: 'CourseHomePage',
            },
          },
          CourseResourcesNav: {
            screens: {
              CourseResourcesPage: 'CourseResourcesPage',
              DetailedResourcePage: 'DetailedResourcePage',
              AddCourseResourcePage: 'AddCourseResourcePage',
            },
          },
          AssignmentsNav: {
            screens: {
              AssignmentsPage: 'AssignmentsPage',
              SubmitAssignmentsPage: 'SubmitAssignmentsPage',
              CreateAssignmentPage: 'CreateAssignmentPage',
              AssignmentsSubmissionsPage: 'AssignmentsSubmissionsPage',
              DetaliedSubmissionPage: 'DetaliedSubmissionPage',
            },
          },
          QuizzesNav: {
            screens: {
              QuizzesPage: 'QuizzesPage',
              QuizPage: 'QuizPage',
              CreateQuizPage: 'CreateQuizPage',
              QuizGradesPage: 'QuizGradesPage',
            },
          },
          CourseInfoNav: {
            screens: {
              CourseInfoPage: 'CourseInfoPage',
              UpdateCourseInfoPage: 'UpdateCourseInfoPage',
            },
          },
          CourseGradesNav: {
            screens: {
              CourseGradesPage: 'CourseGradesPage',
            },
          },
          AdmissionRequestsNav: {
            screens: {
              AdmissionRequestsPage: 'AdmissionRequestsPage',
            },
          },
          StudentsNav: {
            screens: {
              StudentsPage: 'StudentsPage',
            },
          },
          AllCourseGradesNav: {
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
