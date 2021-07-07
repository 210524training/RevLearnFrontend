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
              CourseHome: 'CourseHome',
            },
          },
          CourseResourcesNav: {
            screens: {
              CourseResources: 'CourseResources',
              DetailedResource: 'DetailedResource',
              AddCourseresource: 'AddCourseResource',
            },
          },
          AssignmentsNav: {
            screens: {
              Assignments: 'Assignments',
              SubmitAssignments: 'SubmitAssignments',
              CreateAssignment: 'CreateAssignment',
              AssignmentsSubmissions: 'AssignmentsSubmissions',
              DetaliedSubmission: 'DetaliedSubmission',
            },
          },
          QuizzesNav: {
            screens: {
              Quizzes: 'Quizzes',
              QuizPage: 'QuizPage',
            },
          },
          CourseInfoNav: {
            screens: {
              CourseInfo: 'CourseInfo',
              UpdateCourseInfo: 'UpdateCourseInfo',
            },
          },
          CourseGradesNav: {
            screens: {
              CourseGrades: 'CourseGrades',
            },
          },
          AdmissionRequestsNav: {
            screens: {
              AdmissionRequests: 'AdmissionRequests',
            },
          },
          StudentsNav: {
            screens: {
              Students: 'Students',
            },
          },
          AllCourseGradesNav: {
            screens: {
              AllCourseGrades: 'AllCourseGrades',
            },
          },
        },
      },
      NotFound: '*',
      Modal: 'Modal',
    },
  },
};
