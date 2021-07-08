import React from "react";
import {Text} from 'react-native';
import WithCourseNavbar from "../../../components/higher_order_components/Navbars/WithCourseNavbar";

type Props = {

}
const SubmitAssignmentPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>SubmitAssignmentPage</Text>
    </>
  )
}

export default WithCourseNavbar(SubmitAssignmentPage);