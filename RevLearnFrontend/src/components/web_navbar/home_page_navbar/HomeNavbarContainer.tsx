import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useAppSelector } from '../../../hooks';
import WebNavBarPresentation from './HomeNavbarPresentation';

const HomeNavbarContainer = () => {
  const Navigation = useNavigation();

  /**
   * Navigate to Home Page
   */
  const NavToHomePage = () => {
    Navigation.navigate('Home', { screen: 'HomePage' });
  };

  /**
   * Navigate to User Info
   */
  const NavToUserInfo = () => {
    Navigation.navigate('Home', { screen: 'UserInfo' });
  };

  /**
   * Navigate to Settings
   */
  const NavToSettings = () => {
    Navigation.navigate('Home', { screen: 'Settings' });
  };

  /**
   * Navigate to All Users
   */
  const NavToAllUsers = () => {
    Navigation.navigate('Home', { screen: 'AllUsers' });
  };

  /**
   * Navigate to All Teachers
   */
  const NavToAllTeachers = () => {
    Navigation.navigate('Home', { screen: 'AllTeachers' });
  };

  /**
   * Navigate to All Courses
   */
  const NavToAllCourses = () => {
    Navigation.navigate('Home', { screen: 'AllCourses' });
  };

  /**
   * Navigate to Grades OverView
   */
  const NavToGradesOverView = () => {
    Navigation.navigate('Home', { screen: 'GradesOverView' });
  };

  return (
    <WebNavBarPresentation
      NavToHomePage={NavToHomePage}
      NavToUserInfo={NavToUserInfo}
      NavToSettings={NavToSettings}
      NavToAllUsers={NavToAllUsers}
      NavToAllTeachers={NavToAllTeachers}
      NavToAllCourses={NavToAllCourses}
      NavToGradesOverView={NavToGradesOverView}
      role={''}
    />
  );
};

export default HomeNavbarContainer;
