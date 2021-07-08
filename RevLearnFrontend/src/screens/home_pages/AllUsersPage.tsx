import React from "react";
import {Text} from 'react-native';
import WithHomeNavbar from "../../components/higher_order_components/Navbars/WithHomeNavbar";

type Props = {

}
const AllUsersPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>AllUsersPage</Text>
    </>
  )
}

export default WithHomeNavbar(AllUsersPage);