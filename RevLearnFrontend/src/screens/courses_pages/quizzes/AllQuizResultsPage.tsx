import React from 'react';
import { Text } from 'react-native';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}
const AllQuizResultsPage: React.FC<Props> = (props) => (
  <>
    <Text>AllQuizResultsPage</Text>
  </>
);

// Navigate to QuizPage, CreateQuizPage, QuizGradesPage
/**
 * const navigation = useNavigation();
 * navigation.navigate('QuizPage');
 * navigation.navigate('CreateQuizPage');
 * navigation.navigate('QuizGradesPage');
 */

export default WithCourseNavbar(AllQuizResultsPage);
