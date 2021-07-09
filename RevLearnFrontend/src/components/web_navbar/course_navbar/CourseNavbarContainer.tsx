import { useNavigation } from '@react-navigation/native';
import React from 'react';
import CourseHomeNavbar from './CourseNavbarPresentation';

const CourseNavbarContainer = () => {
  const Navigation = useNavigation();

  /**
   * Navigate to CourseHome
   */
  const NavToCourseHome = () => {
    Navigation.navigate('CourseHome', { screen: 'CourseHomeNav' });
  };
  /**
   * Navigate to CourseResources
   */
  const NavToCourseResources = () => {
    Navigation.navigate('CourseHome', { screen: 'CourseResourcesNav' });
  };
  /**
   * Navigate to Assignments
   */
  const NavToAssignments = () => {
    Navigation.navigate('CourseHome', { screen: 'AssignmentsNav' });
  };
  /**
   * Navigate to Quizzes
   */
  const NavToQuizzes = () => {
    Navigation.navigate('CourseHome', { screen: 'QuizzesNav' });
  };
  /**
   * Navigate to CourseInfo
   */
  const NavToCourseInfo = () => {
    Navigation.navigate('CourseHome', { screen: 'CourseInfoNav' });
  };
  /**
   * Navigate to CourseGrades
   */
  const NavToCourseGrades = () => {
    Navigation.navigate('CourseHome', { screen: 'CourseGradesNav' });
  };
  /**
   * Navigate to AdmissionRequests
   */
  const NavToAdmissionRequests = () => {
    Navigation.navigate('CourseHome', { screen: 'AdmissionRequestsNav' });
  };
  /**
   * Navigate to Students
   */
  const NavToStudents = () => {
    Navigation.navigate('CourseHome', { screen: 'StudentsNav' });
  };
  /**
   * Navigate to AllCourseGrades
   */
  const NavToAllCourseGrades = () => {
    Navigation.navigate('CourseHome', { screen: 'AllCourseGradesNav' });
  };

  return (
    <CourseHomeNavbar
      NavToCourseHome={NavToCourseHome}
      NavToCourseResources={NavToCourseResources}
      NavToAssignments={NavToAssignments}
      NavToQuizzes={NavToQuizzes}
      NavToCourseInfo={NavToCourseInfo}
      NavToCourseGrades={NavToCourseGrades}
      NavToAdmissionRequests={NavToAdmissionRequests}
      NavToStudents={NavToStudents}
      NavToAllCourseGrades={NavToAllCourseGrades}
    />
  );
};

export default CourseNavbarContainer;
