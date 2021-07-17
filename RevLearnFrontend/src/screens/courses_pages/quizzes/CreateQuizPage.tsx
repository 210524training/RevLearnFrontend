/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Button, Text, TextInput, View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import NewQuestion from '../../../components/quiz_entry/NewQuestion';
import DynamicDatePicker from '../../../components/date_picker/DynamicDatePicker';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getQuestions, QuestionState } from '../../../hooks/slices/question.slice';
import { QuizQuestion } from '../../../models/QuizQuestion';
import { updateCourse } from '../../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { Course } from '../../../models/Course';
import { CourseState, getCourse, setCourse } from '../../../hooks/slices/course.slice';
import { Quiz } from '../../../models/Quiz';

type Props = {

}

const CreateQuizPage: React.FC<Props> = () => {
  const questions = useAppSelector<QuestionState>(getQuestions);
  const [passingGrade, setPassingGrade] = useState<string>('0');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startDateStr, setStartDateStr] = useState<string>(new Date().toDateString());
  const [dueDateStr, setDueDateStr] = useState<string>(new Date().toDateString());

  const course: Course | null = useAppSelector<CourseState>(getCourse);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const handleNewQuizSubmit = async () => {
    console.log(questions);
    if(course) {
      const newQuiz: Quiz = {
        ID: uuidv4(),
        submissions: [],
        questions: questions as QuizQuestion[],
        passingGrade: Number(passingGrade),
        startDate: new Date(startDateStr),
        dueDate: new Date(dueDateStr),
        title,
        description,
      };

      const updatedCourse: Course = {
        ...course,
        activities: [
          ...course.activities,
          newQuiz,
        ],
      };

      await updateCourse(updatedCourse);
      dispatch(setCourse(updatedCourse));
      navigation.navigate('QuizzesPage');
    }
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
