import React from "react";
import {Text} from 'react-native';
import WithNavBar from "../components/higher_order_components/WithNavBar";

type Props = {

}
const LoginPage: React.FC<Props> = (props) => {
  return (
    <> 
      <Text>LoginPage</Text>
    </>
  )
}

export default WithNavBar(LoginPage);