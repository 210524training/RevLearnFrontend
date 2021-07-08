import React from "react";
import {Text, View} from 'react-native'
import { NavBarStyles } from "../../../styles/NavBarStyles";

type Props = {
  NavToLandingPage: () => void,
  NavToLoginPage: () => void
}
const UnauthorizedNavbar: React.FC<Props> = ({NavToLandingPage, NavToLoginPage}) => {
  return (
    <View style={NavBarStyles.navContainer}>
      <Text style={NavBarStyles.navItem} onPress={NavToLandingPage}>Landing Page</Text>
      <Text style={NavBarStyles.navItem} onPress={NavToLoginPage}>Login Page</Text>
    </View>
  );
}

export default UnauthorizedNavbar;