import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { View } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { useAppSelector } from '../../../hooks';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { selectUser, UserState } from '../../../hooks/slices/user.slice';
import { Quiz } from '../../../models/Quiz';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { Course } from '../../../models/Course';
import { LandingPageStyles } from '../../../styles/LandingPageStyles';
import { Buttons } from '../../../styles/Buttons';
import { Container } from '../../../styles/Container';
import { Card as StyleCards } from '../../../styles/Cards';

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
    Navigation.navigate('CreateQuizPage');
  };

  const NavToQuizPage = (quiz: Quiz) => {
    Navigation.navigate('QuizPage', { quiz });
  };

  const quizzes = course?.activities.filter((activity) => isQuiz(activity));

  return (
    <>
      {
        quizzes?.map((quiz, index) => (
          <View style={Container.container}>
            <Card key={index} style={StyleCards.container} onPress={() => NavToQuizPage(quiz as Quiz)}>
              <Card.Content>
                <Title style={ LandingPageStyles.header }>{quiz.title}</Title>
              </Card.Content>
            </Card>
          </View>
        ))
      }

      {
        user && user.role === 'Teacher' && (
          <View style={ Container.CenterOnly }>
            <View style={ Buttons.container }>
              <Button onPress={NavToNewQuiz} title='Create Quiz' />
            </View>
          </View>
        )
      }
    </>
  );
};

export default WithCourseNavbar(AllQuizzesPage);
