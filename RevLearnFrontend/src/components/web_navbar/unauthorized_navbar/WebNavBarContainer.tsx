import { useNavigation } from '@react-navigation/native';
import React from 'react';
import WebNavBarPresentation from './WebNavBarPresentation';

const UnauthorizedNavbarContainer = () => {
  const Navigation = useNavigation();

  /**
   * Navigate to Landing Page
   */
  const NavToLandingPage = () => {
    Navigation.navigate('Root', { screen: 'Landing' });
  };
  /**
   * Navigate to Login Page
   */
  const NavToLoginPage = () => {
    Navigation.navigate('Root', { screen: 'Login' });
  };

  return (
    <WebNavBarPresentation
      NavToLandingPage={NavToLandingPage}
      NavToLoginPage={NavToLoginPage}
    />
  );
};

export default UnauthorizedNavbarContainer;
