/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Button, Text, TextInput, View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { v4 as uuidv4 } from 'uuid';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import NewQuestion from '../../../components/quiz_entry/NewQuestion';
import { useAppSelector } from '../../../hooks';
import { getQuestions, QuestionState } from '../../../hooks/slices/question.slice';
import { QuizQuestion } from '../../../models/QuizQuestion';
import { createQuiz } from '../../../remote/RevLearnBackendAPI';

type Props = {

}

const CreateQuizPage: React.FC<Props> = () => {
  const questions = useAppSelector<QuestionState>(getQuestions);
  const [passingGrade, setPassingGrade] = useState<string>('0');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [dueDate, setDueDate] = useState<Date>(new Date());

  const handleNewQuizSubmit = () => {
    console.log(questions);

    const quiz = {
      ID: uuidv4(),
      submissions: [],
      questions: questions as QuizQuestion[],
      passingGrade: Number(passingGrade),
      title,
      description,
      startDate,
      dueDate,
    };

    createQuiz(quiz);
  };

  return (
    <>
      <Text>Quiz Title:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setTitle} />

      <Text>Description:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setDescription} />

      <Text>Start Date:</Text>
      {/* <DatePicker date={startDate} onDateChange={setStartDate} /> */}

      <Text>Due Date:</Text>
      {/* <DatePicker date={dueDate} onDateChange={setDueDate} /> */}

      <Text>Minimum Passing Grade:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setPassingGrade} />

      <Text>Questions:</Text>
      {
        questions.map((question, index) => (
          <ListItem key={index}>
            <View style={{ borderWidth: 1 }}>
              <Text>{question.questionTitle}</Text>
              <Text>{question.prompt}</Text>
            </View>
          </ListItem>
        ))
      }
      <NewQuestion />

      <Button onPress={handleNewQuizSubmit} title="Create Quiz" />
    </>
  );
};

export default WithCourseNavbar(CreateQuizPage);
