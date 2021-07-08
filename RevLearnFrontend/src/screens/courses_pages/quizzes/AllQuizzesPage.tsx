import React from "react";
import {Text} from 'react-native';
import WithCourseNavbar from "../../../components/higher_order_components/Navbars/WithCourseNavbar";

type Props = {

}
const AllQuizzesPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>AllQuizzesPage</Text>
    </>
  )
}

export default WithCourseNavbar(AllQuizzesPage);