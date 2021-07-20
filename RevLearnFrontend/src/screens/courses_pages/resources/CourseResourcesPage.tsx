import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Button } from 'react-native';
import DisplayFiles from '../../../components/display_list/DisplayFiles';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';

type Props = {

}
const CourseResourcesPage: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const course = useAppSelector<CourseState>(getCourse);
  const temp = () => {
    navigation.navigate('AddCourseResourcePage');
  };
  return (
    <>
      <Text>CourseResourcesPage</Text>
      <Button title={'Add a Resource'} onPress={temp}/>
      {course?.resources
       && <DisplayFiles attachments={course.resources}/>
      }
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
