import React from 'react';
import { Text } from 'react-native';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}
const UpdateCourseInfoPage: React.FC<Props> = (props) => (
  <>
    <Text>UpdateCourseInfoPage</Text>
  </>
);

export default WithCourseNavbar(UpdateCourseInfoPage);
