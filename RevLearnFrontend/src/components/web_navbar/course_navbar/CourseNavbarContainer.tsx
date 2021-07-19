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
    Navigation.navigate('CourseHome', { screen: 'CourseResources' });
  };
  /**
   * Navigate to Assignments
   */
  const NavToAssignments = () => {
    Navigation.navigate('CourseHome', { screen: 'Assignments' });
  };
  /**
   * Navigate to Quizzes
   */
  const NavToQuizzes = () => {
    Navigation.navigate('CourseHome', { screen: 'Quizzes' });
  };
  /**
   * Navigate to CourseInfo
   */
  const NavToCourseInfo = () => {
    Navigation.navigate('CourseHome', { screen: 'CourseInfo' });
  };
  /**
   * Navigate to CourseGrades
   */
  const NavToCourseGrades = () => {
    Navigation.navigate('CourseHome', { screen: 'CourseGrades' });
  };
  /**
   * Navigate to AdmissionRequests
   */
  const NavToAdmissionRequests = () => {
    Navigation.navigate('CourseHome', { screen: 'AdmissionRequests' });
  };
  /**
   * Navigate to Students
   */
  const NavToStudents = () => {
    Navigation.navigate('CourseHome', { screen: 'Students' });
  };
  /**
   * Navigate to AllCourseGrades
   */
  const NavToAllCourseGrades = () => {
    Navigation.navigate('CourseHome', { screen: 'AllCourseGrades' });
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
