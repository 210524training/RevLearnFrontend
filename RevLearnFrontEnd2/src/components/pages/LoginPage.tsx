import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

const LoginPage: React.FC<unknown> = () => {
  
  return (
  <>
   {console.log('login Page')}
    {Platform.OS === 'web'
      ? <Text style={styles.test}>Web Login Screen</Text>
      : <Text>Mobile Login Screen</Text>
    }
  </>
  );
    
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
    height: 200,
    width: 300,
  }
});

export default LoginPage;
