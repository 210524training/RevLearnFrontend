import { useNavigation } from "@react-navigation/native";
import React from "react";
import WebNavBarPresentation from "./WebNavBarPresentation";

const UnauthorizedNavbarContainer = () => {
  const Navigation = useNavigation();

  /**
   * Navigate to Landing Page
   */
  const NavToLandingPage = () => {
    Navigation.navigate('Root', {screen: 'LandingNav'});
  }
  /**
   * Navigate to Login Page
   */
  const NavToLoginPage = () => {
    Navigation.navigate('Root', {screen: 'LoginNav'});
  }
  
  return (
    <WebNavBarPresentation
      NavToLandingPage={NavToLandingPage}
      NavToLoginPage={NavToLoginPage}
    />
  );
}

export default UnauthorizedNavbarContainer;