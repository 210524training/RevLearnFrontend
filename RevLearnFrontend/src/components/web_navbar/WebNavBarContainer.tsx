import { useNavigation } from "@react-navigation/native";
import React from "react";
import WebNavBarPresentation from "./WebNavBarPresentation";

const NavBar = () => {
  const Navigation = useNavigation();

  //navigate to landing page
  const NavToLandingPage = () => {
    Navigation.navigate('LandingPage');
  }
  //navigate to landing page
  const NavToLoginPage = () => {
    Navigation.navigate('Root', {screen: 'LoginNav'});
    //  window.alert('NavToLoginPage');
  }
  //navigate to landing page
  const NavToHomePage = () => {
    Navigation.navigate('LoginPage');
  }
  return (
    <WebNavBarPresentation
      NavToLandingPage={NavToLandingPage}
      NavToLoginPage={NavToLoginPage}
    />
  );
}

export default NavBar;