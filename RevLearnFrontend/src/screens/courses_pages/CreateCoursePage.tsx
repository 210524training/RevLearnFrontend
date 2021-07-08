import React from "react";
import {Text} from 'react-native';
import WithCourseNavbar from "../../components/higher_order_components/Navbars/WithCourseNavbar";

type Props = {

}
const CreateCoursePage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>CreateCoursePage</Text>
    </>
  )
}

export default WithCourseNavbar(CreateCoursePage);