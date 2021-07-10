import React from 'react';
import { Text } from 'react-native';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}
const UpdateResourcePage: React.FC<Props> = (props) => (
  <>
    <Text>LandingPage</Text>
  </>
);

export default WithCourseNavbar(UpdateResourcePage);
