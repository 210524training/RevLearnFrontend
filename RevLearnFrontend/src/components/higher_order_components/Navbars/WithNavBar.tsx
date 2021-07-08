import React from "react";
import { Platform } from "react-native";
import NavBar from '../../web_navbar/unauthorized_navbar/WebNavBarContainer';

const WithNavbar = <P extends object>(Component: React.ComponentType<P>): React.ComponentType<P> => {
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

export default WithNavbar;