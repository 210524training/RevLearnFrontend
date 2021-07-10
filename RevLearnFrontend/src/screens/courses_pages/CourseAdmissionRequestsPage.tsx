import React from 'react';
import { Text } from 'react-native';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}
const CourseAdmissionReouetsPage: React.FC<Props> = (props) => (
  <>
    <Text>CourseAdmissionReouetsPage</Text>
  </>
);

export default WithCourseNavbar(CourseAdmissionReouetsPage);
