import React from "react";
import { Platform, Text, View } from "react-native";

const LandingPage: React.FC<unknown> = () => {
  return (
  <>
    <View>
      {Platform.OS === 'web'
        ? <Text>Web Login Screen</Text>
        : <Text>Mobile Login Screen</Text>
      }

      <Text>Web Login Screen</Text>
    </View>
    
  </>
  );
}

export default LandingPage;
