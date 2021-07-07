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
          UserInfoNav: {
            screens: {
              UserInfo: 'UserInfo',
            },
          },
          SettingsNav: {
            screens: {
              Settings: 'Settings',
            },
          },
          // Admins
          AllUsersNav: {
            screens: {
              AllUsers: 'AllUsers',
            },
          },
          AllTeachersNav: {
            screens: {
              AllTeachers: 'AllTeachers',
              CreateTeacher: 'CreateTeacher',
            },
          },
          AllCoursesNav: {
            screens: {
              AllCourses: 'AllCourses',
              CreateCourse: 'CreateCourse',
            },
          },
          // Students / Teachers
          GradesOverViewNav: {
            screens: {
              GradesOverView: 'GradesOverView',
            },
          },
          CourseHomeNav: {
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
                  AddCourseresource: 'AddCourseresource',
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
        },
      },
      NotFound: '*',
      Modal: 'Modal',
    },
  },
};
