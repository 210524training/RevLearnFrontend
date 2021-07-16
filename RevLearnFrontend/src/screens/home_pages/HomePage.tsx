import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Button, Pressable, Text, View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { setCourse } from '../../hooks/slices/course.slice';
import { Course } from '../../models/Course';
import { User } from '../../models/User';
import { getStudentCourses, getTeacherCourses } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { Container } from '../../styles/Container';

type Props = {

}

const setStudentCourses = async (user: User, set: React.Dispatch<React.SetStateAction<Course[]>>): Promise<void> => set(await getStudentCourses(user));
const setTeacherCourses = async (user: User, set: React.Dispatch<React.SetStateAction<Course[]>>): Promise<void> => set(await getTeacherCourses(user));

const HomePage: React.FC<Props> = () => {
  // const user: User = useAppSelector<UserState>(selectUser);
  const user: User = {
    username: 'user',
    password: 'pass',
    id: '123',
    courses: [],
    role: 'Student',
  };

  const dispatch = useAppDispatch();

  const [courses, setCourses] = useState<Course[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    if(user.role === 'Teacher') {
      setTeacherCourses(user, setCourses);
    } else if(user.role === 'Student') {
      setStudentCourses(user, setCourses);
    }
  }, []);

  /**
   * Navigate to Course Home
   */
  const NavToCourseHome = (course: Course | null) => {
    dispatch(setCourse(course));

    console.log('navigating...');
    navigation.navigate('CourseHome', { screen: 'CourseHomeNav' });
  };

  return (
    <View style={Container.container}>
      <Text>HomePage</Text>
      <Text>My Courses:</Text>
      {
        courses.map((course, index) => (
          <ListItem key={index}>
            <Pressable onPress={() => NavToCourseHome(course)}>
              <Text>{course.courseTitle}</Text>
            </Pressable>
          </ListItem>
        ))
      }
      <Button title='Course Home Page' onPress={() => NavToCourseHome(null)}></Button>
    </View>
  );
};

export default WithHomeNavbar(HomePage);
