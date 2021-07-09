import React from 'react';
import { Platform } from 'react-native';
import HomeNavBar from '../../web_navbar/home_page_navbar/HomeNavbarContainer';

const WithHomeNavbar = <P extends object>(Component: React.ComponentType<P>): React.ComponentType<P> => (props) => (
  <>
    {Platform.OS === 'web'
      ? (
        <>
          <HomeNavBar/>
          <Component {...props}/>
        </>
      )
      : <Component {...props}/>
    }

  </>
);

export default WithHomeNavbar;
