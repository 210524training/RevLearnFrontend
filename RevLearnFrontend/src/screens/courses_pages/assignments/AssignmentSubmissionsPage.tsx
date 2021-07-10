import React from 'react';
import { Text } from 'react-native';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}
const AssignmentsSubmissionsPage: React.FC<Props> = (props) => (
  <>
    <Text>AssignmentsSubmissionsPage</Text>
  </>
);

export default WithCourseNavbar(AssignmentsSubmissionsPage);
