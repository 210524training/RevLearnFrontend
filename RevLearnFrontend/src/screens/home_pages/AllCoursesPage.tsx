import React from "react";
import {Text} from 'react-native';
import WithHomeNavbar from "../../components/higher_order_components/Navbars/WithHomeNavbar";

type Props = {

}
const AllCoursesPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>AllCoursesPage</Text>
    </>
  )
}

// Navigate to Create Course
/**
 * const navigation = useNavigation();
 * navigation.navigate('CreateCourse');
 */

export default WithHomeNavbar(AllCoursesPage);