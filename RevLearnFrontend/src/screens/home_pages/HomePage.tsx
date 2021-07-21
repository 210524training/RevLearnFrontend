import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Button, Pressable, Text, View,
} from 'react-native';
import { Card, Title } from 'react-native-paper';
import { ListItem } from 'react-native-elements';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { setCourse } from '../../hooks/slices/course.slice';
import { Course } from '../../models/Course';
import { User } from '../../models/User';
import { getStudentCourses, getTeacherCourses } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { Container } from '../../styles/Container';
import { LandingPageStyles } from '../../styles/LandingPageStyles';
import { Card as StyleCards } from '../../styles/Cards';
import Logo from '../../styles/Logo';

type Props = {

}

const setStudentCourses = async (user: User, set: React.Dispatch<React.SetStateAction<Course[] | null>>): Promise<void> => set(await getStudentCourses(user.id));
const setTeacherCourses = async (user: User, set: React.Dispatch<React.SetStateAction<Course[] | null>>): Promise<void> => set(await getTeacherCourses(user));

const HomePage: React.FC<Props> = () => {
  // const user: User = useAppSelector<UserState>(selectUser);
  const user: User = {
    username: 'user',
    password: 'pass',
    id: '123',
    role: 'Student',
  };

  const dispatch = useAppDispatch();

  const [courses, setCourses] = useState<Course[] | null>(null);
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
      <Text style={LandingPageStyles.header}>My Courses:</Text>
      {courses && courses.map((course, index) => (
        <Card key={index} style={StyleCards.container}>
          <Pressable style={StyleCards.item} onPress={() => NavToCourseHome(course)}>
            <Title>{course.courseTitle}</Title>
          </Pressable>
          <Logo />
        </Card>
      ))
      }
    </View>
  );
};

export default WithHomeNavbar(HomePage);
