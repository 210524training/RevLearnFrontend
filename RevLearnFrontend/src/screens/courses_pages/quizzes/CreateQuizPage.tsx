/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Button, Text, TextInput, View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import NewQuestion from '../../../components/quiz_entry/NewQuestion';
import DynamicDatePicker from '../../../components/date_picker/DynamicDatePicker';
import { useAppSelector } from '../../../hooks';
import { getQuestions, QuestionState } from '../../../hooks/slices/question.slice';
import { QuizQuestion } from '../../../models/QuizQuestion';
import { createQuiz } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {

}

const CreateQuizPage: React.FC<Props> = () => {
  const questions = useAppSelector<QuestionState>(getQuestions);
  const [passingGrade, setPassingGrade] = useState<string>('0');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startDateStr, setStartDateStr] = useState<string>(new Date().toDateString());
  const [dueDateStr, setDueDateStr] = useState<string>(new Date().toDateString());

  const handleNewQuizSubmit = () => {
    console.log(questions);

    const quiz = {
      ID: uuidv4(),
      submissions: [],
      questions: questions as QuizQuestion[],
      passingGrade: Number(passingGrade),
      startDate: new Date(startDateStr),
      dueDate: new Date(dueDateStr),
      title,
      description,
    };

    createQuiz(quiz);
  };

  return (
    <>
      <Text>Quiz Title:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setTitle} />

      <Text>Description:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setDescription} />

      <DynamicDatePicker date={startDateStr} setDate={setStartDateStr} title={'Start Date'}/>
      <DynamicDatePicker date={dueDateStr} setDate={setDueDateStr} title={'End Date'}/>

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
