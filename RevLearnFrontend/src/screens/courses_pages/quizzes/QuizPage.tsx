/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import {
  Button, Text, TextInput, View,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { v4 as uuidv4 } from 'uuid';
import { ListItem } from 'react-native-elements';
import { MultipleChoiceQuizQuestion } from '../../../models/MultipleChoiceQuizQuestion';
import { Quiz } from '../../../models/Quiz';
import { QuizQuestion } from '../../../models/QuizQuestion';
import { ShortAnswerQuestion } from '../../../models/ShortAnswerQuestion';
import { MultipleChoiceOption, MultipleChoicePossibleAnswer } from '../../../types/MyTypes';
import { updateQuiz } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { QuizSubmission } from '../../../models/QuizSubmission';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}

const QuizPage: React.FC<Props> = () => {
  const questions: (ShortAnswerQuestion | MultipleChoiceQuizQuestion)[] = [
    {
      questionID: '1',
      questionTitle: 'Question 1',
      pointValue: 1,
      prompt: 'This is a question',
      correctAnswer: 'answer1',
    },
    {
      questionID: '2',
      questionTitle: 'Question 2',
      pointValue: 1,
      prompt: 'This is a question',
      correctAnswer: 'answer2',
    },
    {
      questionID: '3',
      questionTitle: 'Question 3',
      pointValue: 1,
      prompt: 'This is a question',
      correctAnswer: 'answer3',
    },
    {
      questionID: '4',
      questionTitle: 'Question 4',
      pointValue: 1,
      prompt: 'This is a multiple choice question',
      correctAnswer: 'OptionB',
      choices: [
        { option: 'OptionA', answer: 'The first option' },
        { option: 'OptionB', answer: 'The second option' },
        { option: 'OptionC', answer: 'The third option' },
        { option: 'OptionD', answer: 'The fourth option' },
      ],
    },
  ];

  const quiz: Quiz = {
    ID: '1',
    title: 'Demo Quiz',
    startDate: new Date(),
    dueDate: new Date(),
    description: 'This is a description of the quiz. Good luck.',
    submissions: [],
    passingGrade: 70,
    questions,
  };

  function isMultipleChoiceQuestion(question: QuizQuestion): question is MultipleChoiceQuizQuestion {
    return 'choices' in question;
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

  function getRadioOptions(question: MultipleChoiceQuizQuestion): { label: string, value: string }[] {
    const options = question.choices.map((choice: MultipleChoicePossibleAnswer) => ({ label: choice.answer, value: choice.option }));

    return options;
  }

  // Grade the quiz by comparing the input answer with the corrrct answer
  const handleQuizSubmit = () => {
    let possiblePoints: number = 0;
    questions.forEach((question) => {
      possiblePoints += question.pointValue;
    });

    let earnedPoints: number = 0;

    answerHooks.forEach((question, index) => {
      if(questions[index].correctAnswer === answerHooks[index].value) {
        earnedPoints += questions[index].pointValue;
      }
    });

    const percentCorrect = earnedPoints / possiblePoints;
    const formattedPercent: number = Math.floor(percentCorrect * 10000) / 100;

    const submission: QuizSubmission = {
      submissionID: uuidv4(),
      studentID: '1',
      submissionDate: new Date(),
      grade: formattedPercent,
    };

    console.log(submission);
    quiz.submissions.push(submission);
    updateQuiz(quiz);
  };

  return (
    <>
      <Text>{quiz.title}</Text>
      <Text>{quiz.description}</Text>

      {
        quiz.questions.map((question, index: number) => (
          <ListItem key={index}>
            <View style={{ borderWidth: 1 }}>
              <Text>{questions[index].questionTitle}</Text>
              <Text>{questions[index].prompt}</Text>

              {
                isMultipleChoiceQuestion(questions[index]) ? (
                  <RadioForm radio_props={getRadioOptions(questions[index] as MultipleChoiceQuizQuestion)} initial={0} onPress={answerHooks[index].setter} />
                ) : (
                  <TextInput style={{ borderWidth: 1 }} onChangeText={answerHooks[index].setter} />
                )
              }

            </View>
          </ListItem>
        ))
      }

      <Button title='Submit Quiz' onPress={handleQuizSubmit} />
    </>
  );
};

export default WithCourseNavbar(QuizPage);
