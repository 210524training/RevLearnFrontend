import React, { useState } from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, Text, View } from 'react-native';
import NewQuestion from '../../../components/quiz_entry/NewQuestion';
import { useAppSelector } from '../../../hooks';
import { getQuestions, addQuestion, clear, QuestionState } from '../../../hooks/slices/question.slice';
import QuizQuestion from '../../../models/QuizQuestion';

type Props = {

}

const CreateQuizPage: React.FC<Props> = (props) => {
  const questions = useAppSelector<QuestionState>(getQuestions);

  const handleNewQuizSubmit = (ev: NativeSyntheticEvent<NativeTouchEvent>) => {
    console.log(questions);
  };

  return (
    <>
      {
        questions.map((question) => (
          <>
            <View style={{borderWidth: 1}}>
              <Text>{question.questionTitle}</Text>
              <Text>{question.prompt}</Text>
            </View>
          </>
        ))
      }
      <NewQuestion />

      <Button onPress={handleNewQuizSubmit} title="Create Quiz" />
    </>
  );
};

export default CreateQuizPage;
