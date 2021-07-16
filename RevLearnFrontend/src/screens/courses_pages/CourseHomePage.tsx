import React from 'react';
import { Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { getCourse, CourseState, setCourse } from '../../hooks/slices/course.slice';
import { User } from '../../models/User';
import { Course } from '../../models/Course';
import { updateCourse } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';

type Props = {

}
const CourseHomePage: React.FC<Props> = () => {
  const user: User | null = useAppSelector<UserState>(selectUser);
  const course: Course | null = useAppSelector<CourseState>(getCourse);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const dropCourse = async () => {
    if(course) {
      const updatedStudentsList = course.students.filter((student) => student !== user.id);

      const updatedCourse = {
        ...course,
        students: updatedStudentsList,
      };

      await updateCourse(updatedCourse);
      dispatch(setCourse(null));
      navigation.navigate('HomePage', { screen: 'HomePageNav' });
    }
  };

  return (
    <>
      <Text>CourseHomePage</Text>
      {
        course && user?.role === 'Student' && (
          <Button onPress={dropCourse} title='Drop Course' />
        )
      }
    </>
  );
};

export default WithCourseNavbar(CourseHomePage);
