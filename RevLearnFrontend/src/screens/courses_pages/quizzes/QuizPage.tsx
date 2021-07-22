/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import {
  Button, Text, View,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { MultipleChoiceQuizQuestion } from '../../../models/MultipleChoiceQuizQuestion';
import { QuizQuestion } from '../../../models/QuizQuestion';
import { MultipleChoiceOption, MultipleChoicePossibleAnswer } from '../../../Types/MyTypes';
import { updateCourse } from '../../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { QuizSubmission } from '../../../models/QuizSubmission';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { Course } from '../../../models/Course';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { CourseState, getCourse, setCourse } from '../../../hooks/slices/course.slice';
import { Activity } from '../../../models/Activity';
import { UserState, selectUser } from '../../../hooks/slices/user.slice';
import { User } from '../../../models/User';
import { Container } from '../../../styles/Container';
import { Card as StyleCards } from '../../../styles/Cards';
import { CourseHome } from '../../../styles/CourseHome';
import { InputField } from '../../../styles/InputField';
import { LandingPageStyles } from '../../../styles/LandingPageStyles';

type Props = {
  route: any
}

const QuizPage: React.FC<Props> = ({ route }) => {
  const { quiz } = route.params;
  const course: Course | null = useAppSelector<CourseState>(getCourse);
  const user: User | null = useAppSelector<UserState>(selectUser);

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  function isMultipleChoiceQuestion(question: QuizQuestion): question is MultipleChoiceQuizQuestion {
    return 'choices' in question;
  }

  function getRadioOptions(question: MultipleChoiceQuizQuestion): { label: string, value: string }[] {
    const options = question.choices.map((choice: MultipleChoicePossibleAnswer) => ({ label: choice.answer, value: choice.option }));

    return options;
  }

  // Creating an array of hooks that dynamically scales to match the number of questions
  const answerHooks: { value: string | MultipleChoiceOption, setter: React.Dispatch<React.SetStateAction<any>> }[] = [];
  quiz.questions.forEach((question: QuizQuestion) => {
    if(isMultipleChoiceQuestion(question)) {
      const [value, setter] = useState<MultipleChoiceOption>('OptionA');
      answerHooks.push({ value, setter });
    } else {
      const [value, setter] = useState<string>('');
      answerHooks.push({ value, setter });
    }
  });

  // Grade the quiz by comparing the input answer with the corrrct answer
  const handleQuizSubmit = async () => {
    if(course && user) {
      let possiblePoints: number = 0;
      quiz.questions.forEach((question: QuizQuestion) => {
        possiblePoints += question.pointValue;
      });

      let earnedPoints: number = 0;

      answerHooks.forEach((question, index) => {
        if(quiz.questions[index].correctAnswer === answerHooks[index].value) {
          earnedPoints += quiz.questions[index].pointValue;
        }
      });

      const percentCorrect = earnedPoints / possiblePoints;
      const formattedPercent: number = Math.floor(percentCorrect * 10000) / 100;

      const submission: QuizSubmission = {
        submissionID: uuidv4(),
        studentID: user.id,
        submissionDate: new Date(),
        grade: formattedPercent,
      };

      quiz.submissions.push(submission);
      course.activities.find((element: Activity) => element.ID === quiz.id)?.submissions.push(submission);

      await updateCourse(course);
      navigation.navigate('QuizzesPage');
    }
  };

  return (
    <View>
      <Text style={LandingPageStyles.headerFont}>{quiz.title}</Text>
      <Text style={LandingPageStyles.h2}>{quiz.description}</Text>
      {
        quiz.questions.map((question: QuizQuestion, index: number) => (
          <View style={Container.container}>
            <Text>{question.questionTitle}</Text>
            <Text>{question.prompt}</Text>
            {
              isMultipleChoiceQuestion(question) ? (
                <RadioForm radio_props={getRadioOptions(question as MultipleChoiceQuizQuestion)} initial={0} onPress={answerHooks[index].setter} />
              ) : (
                <TextInput
                  style={InputField.container}
                  onChangeText={answerHooks[index].setter} />
              )
            }
          </View>
        ))
      }

      <Button title='Submit Quiz' onPress={handleQuizSubmit} />
    </View>
  );
};

export default WithCourseNavbar(QuizPage);
