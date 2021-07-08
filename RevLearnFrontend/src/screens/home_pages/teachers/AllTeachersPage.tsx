import React from "react";
import {Text} from 'react-native';
import WithHomeNavbar from "../../../components/higher_order_components/Navbars/WithHomeNavbar";

type Props = {

}
const AllTeachersPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>AllTeachersPage</Text>
    </>
  )
}

// Navigate to Create Teacher
/**
 * const navigation = useNavigation();
 * navigation.navigate('CreateTeacher');
 */

export default WithHomeNavbar(AllTeachersPage);