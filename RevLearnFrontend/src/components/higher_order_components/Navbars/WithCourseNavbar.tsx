import React from 'react';
import { Platform } from 'react-native';
import CourseNavbarContainer from '../../web_navbar/course_navbar/CourseNavbarContainer';

const WithCourseHomeNavbar = <P extends object>(Component: React.ComponentType<P>): React.ComponentType<P> => (props) => (
  <>
    {Platform.OS === 'web'
      ? (
        <>
          <CourseNavbarContainer/>
          <Component {...props}/>
        </>
      )
      : <Component {...props}/>
    }

  </>
);

export default WithCourseHomeNavbar;
