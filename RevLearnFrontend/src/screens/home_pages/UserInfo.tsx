import React from "react";
import {Text} from 'react-native';
import WithHomeNavbar from "../../components/higher_order_components/Navbars/WithHomeNavbar";
import User from "../../models/user";

type Props = {

}
const UserInfoPage: React.FC<Props> = (props) => {
  const user: User = {

  }
  return (
    <>
      <Text>UserInfoPage</Text>
    </>
  )
}

export default WithHomeNavbar(UserInfoPage);