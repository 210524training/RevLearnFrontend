import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import B from '../../../components/BoldText';
import DisplayFiles from '../../../components/display_list/DisplayFiles';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { View } from '../../../components/Themed';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { ResourceStyles } from '../../../styles/ResourceStyles';

type Props = {

}
const CourseResourcesPage: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const course = useAppSelector<CourseState>(getCourse);
  const temp = () => {
    navigation.navigate('AddCourseResourcePage');
  };
  return (
    <View style={ResourceStyles.container}>
      {Platform.OS === 'web' && <B input={'CourseResourcesPage'}/>}
      <Button style={ResourceStyles.item} onPress={temp} color='#19D9FF' mode={'contained'}>Add a Resource</Button>
      {course?.resources
       && <DisplayFiles attachments={course.resources}/>
      }
    </View>
  );
};

// Navigate to DetailedResource, AddCourseResource
/**
 * const navigation = useNavigation();
 * navigation.navigate('DetailedResource');
 * navigation.navigate('AddCourseResource');
 */
export default WithCourseNavbar(CourseResourcesPage);
