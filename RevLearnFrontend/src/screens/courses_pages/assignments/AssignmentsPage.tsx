import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}
const AssignmentsPage: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  const createNavHandler = () => {
    navigation.navigate('CreateAssignmentPage');
  };
  return (
    <>
      <Text>AssignmentsPage</Text>
      <Button title={'navigate to create'} onPress={createNavHandler}>Create Assignment</Button>
    </>
  );
};

// Navigate to SubmitAssignments, CreateAssignment, AssignmentsSubmissions, DetaliedSubmission
/**
 * const navigation = useNavigation();
 * navigation.navigate('SubmitAssignmentsPage');
 * navigation.navigate('CreateAssignmentPage');
 * navigation.navigate('AssignmentsSubmissionsPage');
 * navigation.navigate('DetaliedSubmissionPage');
 */

export default WithCourseNavbar(AssignmentsPage);
