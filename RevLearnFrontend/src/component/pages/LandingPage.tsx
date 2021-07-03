import React from "react";
import { Platform, Text } from "react-native";

const LandingPage: React.FC<unknown> = () => {
  return (
  <>
    {Platform.OS === 'web'
      ? <Text>Web Login Screen</Text>
      : <Text>Mobile Login Screen</Text>
    }
  </>
  );
}

export default LandingPage;
