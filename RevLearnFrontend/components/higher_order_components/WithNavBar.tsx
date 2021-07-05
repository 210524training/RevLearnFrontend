import React from "react";
import { Platform } from "react-native";
import NavBar from '../../components/WebNavBar';

const WithNavBar = <P extends object>(Component: React.ComponentType<P>): React.ComponentType<P> => {
  return (props) => (
    <>
      {Platform.OS === 'web'
        ? (
          <>
            <NavBar/>
            <Component {...props}/>
          </>
        )
        : <Component {...props}/>
      }
      
    </>
  );
}

export default WithNavBar;