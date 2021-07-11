import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Button } from 'react-native';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}
const CourseResourcesPage: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const temp = () => {
    navigation.navigate('AddCourseResourcePage');
  };
  return (
    <>
      <Text>CourseResourcesPage</Text>
      <Button title={'Resources'} onPress={temp}/>
    </>
  );
};

// Navigate to DetailedResource, AddCourseResource
/**
 * const navigation = useNavigation();
 * navigation.navigate('DetailedResource');
 * navigation.navigate('AddCourseResource');
 */
export default WithCourseNavbar(CourseResourcesPage);
