import React from "react";
import {Text} from 'react-native';
import WithCourseNavbar from "../../../components/higher_order_components/Navbars/WithCourseNavbar";

type Props = {

}
const CourseResourcesPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>CourseResourcesPage</Text>
    </>
  )
}

// Navigate to DetailedResource, AddCourseResource
/**
 * const navigation = useNavigation();
 * navigation.navigate('DetailedResource');
 * navigation.navigate('AddCourseResource');
 */
export default WithCourseNavbar(CourseResourcesPage);