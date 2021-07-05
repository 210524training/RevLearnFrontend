import React from "react";
import NavBar from '../../components/WebNavBar';

const WithNavBar = <P extends object>(Component: React.ComponentType<P>): React.ComponentType<P> => {
  return (props) => (
    <>
      <NavBar/>
      <Component {...props}>
        {/* Add some children */}
      </Component>
    </>
  );
}

export default WithNavBar;