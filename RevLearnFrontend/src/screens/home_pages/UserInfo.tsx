import React from "react";
import {Text} from 'react-native';
import WithHomeNavbar from "../../components/higher_order_components/Navbars/WithHomeNavbar";

type Props = {

}
const UserInfoPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>UserInfoPage</Text>
    </>
  )
}

export default WithHomeNavbar(UserInfoPage);