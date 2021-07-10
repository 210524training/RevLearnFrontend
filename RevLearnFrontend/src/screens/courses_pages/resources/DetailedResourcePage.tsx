import React from 'react';
import { Text } from 'react-native';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}
const DetailedResourcePage: React.FC<Props> = (props) => (
  <>
    <Text>DetailedResourcePage</Text>
  </>
);

export default WithCourseNavbar(DetailedResourcePage);
