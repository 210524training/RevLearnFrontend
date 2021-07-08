import React from "react";
import {Text} from 'react-native';
import WithCourseNavbar from "../../components/higher_order_components/Navbars/WithCourseNavbar";

type Props = {

}
const CourseHomePage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>CourseHomePage</Text>
    </>
  )
}

export default WithCourseNavbar(CourseHomePage);