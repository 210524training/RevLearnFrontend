import { useNavigation } from '@react-navigation/native';
import React from 'react';
import CourseHomeNavbar from './CourseNavbarPresentation';

const CourseNavbarContainer = () => {
  const Navigation = useNavigation();

  /**
   * Navigate to CourseHome
   */
  const NavToCourseHome = () => {
    Navigation.navigate('CourseHome', { screen: 'CourseHome' });
  };
  /**
   * Navigate to CourseResources
   */
  const NavToCourseResources = () => {
    Navigation.navigate('CourseResources');
  };
  /**
   * Navigate to Assignments
   */
  const NavToAssignments = () => {
    Navigation.navigate('Assignments');
  };
  /**
   * Navigate to Quizzes
   */
  const NavToQuizzes = () => {
    Navigation.navigate('Quizzes');
  };
  /**
   * Navigate to CourseInfo
   */
  const NavToCourseInfo = () => {
    Navigation.navigate('CourseInfo');
  };
  /**
   * Navigate to CourseGrades
   */
  const NavToCourseGrades = () => {
    Navigation.navigate('CourseGrades');
  };
  /**
   * Navigate to AdmissionRequests
   */
  const NavToAdmissionRequests = () => {
    Navigation.navigate('AdmissionRequests');
  };
  /**
   * Navigate to Students
   */
  const NavToStudents = () => {
    Navigation.navigate('Students');
  };
  /**
   * Navigate to AllCourseGrades
   */
  const NavToAllCourseGrades = () => {
    Navigation.navigate('AllCourseGrades');
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
    />
  );
};

export default CourseNavbarContainer;
