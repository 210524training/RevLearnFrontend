import React from "react";
import {Text} from 'react-native';
import WithCourseNavbar from "../../components/higher_order_components/Navbars/WithCourseNavbar";

type Props = {

}
const CourseGradesPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>CourseGradesPage</Text>
    </>
  )
}

export default WithCourseNavbar(CourseGradesPage);