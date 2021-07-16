import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, ListItem } from 'react-native-elements';
import { Pressable, Text } from 'react-native';
import { useAppSelector } from '../../../hooks';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { selectUser, UserState } from '../../../hooks/slices/user.slice';
import { Quiz } from '../../../models/Quiz';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { Course } from '../../../models/Course';

type Props = {

}

function isQuiz(object: any): object is Quiz {
  return 'questions' in object;
}

const AllQuizzesPage: React.FC<Props> = () => {
  const user = useAppSelector<UserState>(selectUser);
  const course: Course | null = useAppSelector<CourseState>(getCourse);

  const Navigation = useNavigation();
  const NavToNewQuiz = () => {
    Navigation.navigate('CreateQuizPage', { screen: 'CreateQuizPage' });
  };

  const NavToQuizPage = () => {
    Navigation.navigate('QuizPage', { screen: 'QuizPage' });
  };

  const quizzes = course?.activities.filter((activity) => isQuiz(activity));

  return (
    <>
      {
        // user && user.role === 'Teacher' && (
        true && (
          <Button onPress={NavToNewQuiz} title='+ Quiz' />
        )
      }
      {
        quizzes?.map((quiz, index) => (
          <ListItem key={index}>
            <Pressable onPress={NavToQuizPage}>
              <Text>{quiz.title}</Text>
            </Pressable>
          </ListItem>
        ))
      }
    </>
  );
};

export default WithCourseNavbar(AllQuizzesPage);
