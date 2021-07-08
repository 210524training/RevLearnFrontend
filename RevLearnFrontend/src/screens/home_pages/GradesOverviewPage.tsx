import React from "react";
import {Text} from 'react-native';
import WithHomeNavbar from "../../components/higher_order_components/Navbars/WithHomeNavbar";

type Props = {

}
const GradesOverviewPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>GradesOverviewPage</Text>
    </>
  )
}

export default WithHomeNavbar(GradesOverviewPage);