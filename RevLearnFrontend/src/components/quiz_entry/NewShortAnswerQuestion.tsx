import React, { useState } from 'react';
import {
  NativeSyntheticEvent, NativeTouchEvent, Text, TextInput,
} from 'react-native';
import { Button } from 'react-native-paper';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../hooks';
import { addQuestion } from '../../hooks/slices/question.slice';

const NewShortAnswerQuestion: React.FC<unknown> = () => {
  const [title, setTitle] = useState<string>('');
  const [pointValue, setPointValue] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleQuestionSubmit = () => {
    const newQuestion = {
      questionID: uuidv4(),
      questionTitle: title,
      correctAnswer: answer,
      pointValue: Number(pointValue),
      prompt,
    };

    dispatch(addQuestion(newQuestion));
  };

  return (
    <>
      <Text>Question Title</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setTitle} />

      <Text>Point Value</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setPointValue} />

      <Text>Question Prompt</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setPrompt} />

      <Text>Answer</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setAnswer} />

      <Button mode="contained" color="#19D9FF" onPress={handleQuestionSubmit}>Add Question</Button>
    </>
  );
};

export default NewShortAnswerQuestion;
