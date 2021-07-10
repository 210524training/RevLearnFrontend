import React from 'react';
import { Text } from 'react-native';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}
const CourseStudentsPage: React.FC<Props> = (props) => (
  <>
    <Text>CourseStudentsPage</Text>
  </>
);

export default WithCourseNavbar(CourseStudentsPage);
