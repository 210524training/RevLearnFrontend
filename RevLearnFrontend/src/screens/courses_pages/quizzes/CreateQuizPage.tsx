/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  ScrollView, Text, View,
} from 'react-native';
import {
  TextInput, Button, Card, Paragraph, Title,
} from 'react-native-paper';
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
import { InputField } from '../../../styles/InputField';
import { Container } from '../../../styles/Container';
import { LandingPageStyles } from '../../../styles/LandingPageStyles';

type Props = {

}

const CreateQuizPage: React.FC<Props> = () => {
  const questions = useAppSelector<QuestionState>(getQuestions);
  const [passingGrade, setPassingGrade] = useState<string>('0');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startDateStr, setStartDateStr] = useState<string>(new Date().toDateString());
  const [dueDateStr, setDueDateStr] = useState<string>(new Date().toDateString());
  const [startDate, setStartDate] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');

  const course: Course | null = useAppSelector<CourseState>(getCourse);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    const start = startDateStr.split(' ');
    const due = dueDateStr.split(' ');
    setStartDate(`${start[1]} ${start[2]} ${start[3]}`);
    setDueDate(`${due[1]} ${due[2]} ${due[3]}`);
  }, [startDateStr, dueDateStr]);

  const handleNewQuizSubmit = async () => {
    console.log(questions);
    if(course) {
      const newQuiz: Quiz = {
        ID: uuidv4(),
        submissions: [],
        questions: questions as QuizQuestion[],
        passingGrade: Number(passingGrade),
        startDate: new Date(startDate),
        dueDate: new Date(dueDate),
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
    <ScrollView>
      <View style={Container.container}>
        <Text style={LandingPageStyles.header}>Create a Quiz</Text>
        <TextInput
          style={InputField.container}
          label='Quiz Title'
          onChangeText={setTitle}
        />
        <TextInput
          style={InputField.container}
          label='Description'
          onChangeText={setDescription}
        />
        <TextInput
          style={InputField.container}
          label='Minimum Passing Grade'
          onChangeText={setPassingGrade}
        />
        <DynamicDatePicker date={startDate} setDate={setStartDateStr} title={'Start Date'}/>
        <DynamicDatePicker date={dueDate} setDate={setDueDateStr} title={'Due Date'}/>

      </View>
      {
        questions.map((question, index) => (
          <Card key={index}>
            <Card.Content>
              <Title>{question.questionTitle}</Title>
              <Paragraph>{question.prompt}</Paragraph>
            </Card.Content>
          </Card>
        ))
      }
      <NewQuestion />

      <Button mode="contained" color="#19D9FF" onPress={handleNewQuizSubmit}>Create Quiz</Button>
    </ScrollView>
  );
};

export default WithCourseNavbar(CreateQuizPage);
