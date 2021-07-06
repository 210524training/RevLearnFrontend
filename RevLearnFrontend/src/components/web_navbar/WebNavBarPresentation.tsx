import React from "react";
import {Text, View} from 'react-native'

type Props = {
  NavToLandingPage: () => void,
  NavToLoginPage: () => void
}
const NavBar: React.FC<Props> = ({NavToLandingPage, NavToLoginPage}) => {
  return (
    <View>
      <Text onPress={NavToLandingPage}>Landing Page</Text>
      <Text onPress={NavToLoginPage}>Login Page</Text>
    </View>
  );
}

export default NavBar;