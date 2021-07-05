import React from "react";
import {Text} from 'react-native';
import WithNavBar from "../../components/higher_order_components/WithNavBar";


type Props = {

}
const LandingPage: React.FC<Props> = (props) => {
  return (
    <>
      
      <Text>Landing Page</Text>
    </>
  )
}

export default WithNavBar(LandingPage);