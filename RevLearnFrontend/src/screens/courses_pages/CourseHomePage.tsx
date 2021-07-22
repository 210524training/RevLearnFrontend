import React from 'react';
import { Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { getCourse, CourseState, setCourse } from '../../hooks/slices/course.slice';
import { User } from '../../models/User';
import { Course } from '../../models/Course';
import { updateCourse } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { View } from '../../components/Themed';
import { Container } from '../../styles/Container';
import { Card as CardStyles } from '../../styles/Cards';
import { CourseHome } from '../../styles/CourseHome';
import B from '../../components/BoldText';

type Props = {

}
const CourseHomePage: React.FC<Props> = () => {
  const user: User | null = useAppSelector<UserState>(selectUser);
  const course: Course | null = useAppSelector<CourseState>(getCourse);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const dropCourse = async () => {
    if(course && user) {
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
    <View style={CourseHome.container}>
      <Text style={CourseHome.bold}>CourseHomePage</Text>
      <Card style={CourseHome.card}>
        <Card.Content>

          <Text style={CourseHome.item}><B input={'Course Title: '}/>  {course?.courseTitle}</Text>
          <Text style={CourseHome.item}>Start Date: {course?.startDate}</Text>
          <Text style={CourseHome.item}>End Date: {course?.endDate}</Text>
          <Text style={CourseHome.item}>Category: {course?.category}</Text>
          <Text style={CourseHome.item}>Passing Grade: {course?.passingGrade}</Text>
          <Text style={CourseHome.item}>Number of Students: {course?.students.length}</Text>
          <Text style={CourseHome.item}>Number of Assignments: {course?.activities.length}</Text>
          <Text style={CourseHome.item}>Number of Resources: {course?.resources.length}</Text>
        </Card.Content>

      </Card>

      {
        course && user?.role === 'Student' && (
          <Button onPress={dropCourse} title='Drop Course' />
        )
      }
    </View>
  );
};

export default WithCourseNavbar(CourseHomePage);
