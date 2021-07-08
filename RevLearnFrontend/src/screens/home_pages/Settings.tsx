import React from "react";
import {Text} from 'react-native';
import WithHomeNavbar from "../../components/higher_order_components/Navbars/WithHomeNavbar";

type Props = {

}
const SettingsPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>SettingsPage</Text>
    </>
  )
}

export default WithHomeNavbar(SettingsPage);