import React from "react";
import {Text} from 'react-native';
import WithCourseNavbar from "../../../components/higher_order_components/Navbars/WithCourseNavbar";

type Props = {

}
const CreateAssignmentPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>CreateAssignmentsPage</Text>
    </>
  )
}

export default WithCourseNavbar(CreateAssignmentPage);