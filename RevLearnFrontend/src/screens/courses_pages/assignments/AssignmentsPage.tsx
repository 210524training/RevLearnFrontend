import React from "react";
import {Text} from 'react-native';
import WithCourseNavbar from "../../../components/higher_order_components/Navbars/WithCourseNavbar";

type Props = {

}
const AssignmentsPage: React.FC<Props> = (props) => {
  return (
    <>
      <Text>AssignmentsPage</Text>
    </>
  )
}

// Navigate to SubmitAssignments, CreateAssignment, AssignmentsSubmissions, DetaliedSubmission
/**
 * const navigation = useNavigation();
 * navigation.navigate('SubmitAssignments');
 * navigation.navigate('CreateAssignment');
 * navigation.navigate('AssignmentsSubmissions');
 * navigation.navigate('DetaliedSubmission');
 */

export default WithCourseNavbar(AssignmentsPage);