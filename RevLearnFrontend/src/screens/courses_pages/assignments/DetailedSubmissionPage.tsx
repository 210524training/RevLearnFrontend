import React from 'react';
import { Text } from 'react-native';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}
const DetailedSubmissionPage: React.FC<Props> = (props) => (
  <>
    <Text>DetailedSubmissionPage</Text>
  </>
);

export default WithCourseNavbar(DetailedSubmissionPage);
