import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform } from 'react-native';
import { Button } from 'react-native-paper';
import B from '../../../components/BoldText';
import DisplayFiles from '../../../components/display_list/DisplayFiles';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { View } from '../../../components/Themed';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { UserState, selectUser } from '../../../hooks/slices/user.slice';
import { Container } from '../../../styles/Container';
import { ResourceStyles } from '../../../styles/ResourceStyles';

type Props = {

}

const CourseResourcesPage: React.FC<Props> = () => {
  const navigation = useNavigation();
  const course = useAppSelector<CourseState>(getCourse);
  const user = useAppSelector<UserState>(selectUser);

  const temp = () => {
    navigation.navigate('AddCourseResourcePage');
  };

  return (
    <View style={Container.assignmentContainer}>
      {Platform.OS === 'web' && <B input={'Course Resources'}/>}

      {
        user?.role === 'Teacher' && (
          <Button style={ResourceStyles.item} onPress={temp} color='#19D9FF' mode={'contained'}>Add a Resource</Button>
        )
      }

      {course?.resources
       && <DisplayFiles attachments={course.resources}/>
      }
    </View>
  );
};

export default WithCourseNavbar(CourseResourcesPage);
