import React from "react";
import {Text} from 'react-native';
import WithCourseNavbar from "../../../components/higher_order_components/Navbars/WithCourseNavbar";

type Props = {

}
const CourseInfoPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>CourseInfoPage</Text>
    </>
  )
}

// Navigate to UpdateCourseInfoPage
/**
 * const navigation = useNavigation();
 * navigation.navigate('UpdateCourseInfoPage');
 */

export default WithCourseNavbar(CourseInfoPage);