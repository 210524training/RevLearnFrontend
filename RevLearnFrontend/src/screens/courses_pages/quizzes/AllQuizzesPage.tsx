import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, ListItem } from 'react-native-elements';
import { Pressable, Text } from 'react-native';
import { useAppSelector } from '../../../hooks';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { selectUser, UserState } from '../../../hooks/slices/user.slice';
import { Quiz } from '../../../models/Quiz';

type Props = {

}
const AllQuizzesPage: React.FC<Props> = () => {
  const user = useAppSelector<UserState>(selectUser);

  const Navigation = useNavigation();
  const NavToNewQuiz = () => {
    Navigation.navigate('CreateQuizPage', { screen: 'CreateQuizPage' });
  };

  const NavToQuizPage = () => {
    Navigation.navigate('QuizPage', { screen: 'QuizPage' });
  };

  const demoQuiz: Quiz = {
    submissions: [],
    title: 'Quiz 1',
    passingGrade: 70,
    ID: '1',
    startDate: new Date(),
    dueDate: new Date(),
    description: '',
    questions: [],
  };
  const quizzes = [demoQuiz];

  return (
    <>
      {
        // user && user.role === 'Teacher' && (
        true && (
          <Button onPress={NavToNewQuiz} title='+ Quiz' />
        )
      }
      {
        quizzes.map((quiz, index) => (
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
