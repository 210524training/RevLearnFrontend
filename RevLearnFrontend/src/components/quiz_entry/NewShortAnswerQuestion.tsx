import React, { useState } from 'react';
import {
  Button, NativeSyntheticEvent, NativeTouchEvent, Text,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { TextInput } from 'react-native-paper';
import { useAppDispatch } from '../../hooks';
import { addQuestion } from '../../hooks/slices/question.slice';
import { InputField } from '../../styles/InputField';

const NewShortAnswerQuestion: React.FC<unknown> = () => {
  const [title, setTitle] = useState<string>('');
  const [pointValue, setPointValue] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleQuestionSubmit = (ev: NativeSyntheticEvent<NativeTouchEvent>) => {
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
      <TextInput style={InputField.container} label="Question Title" onChangeText={setTitle} />

      <TextInput style={InputField.container} label="Point Value" onChangeText={setPointValue} />

      <TextInput style={InputField.container} label="Question Prompt" onChangeText={setPrompt} />

      <TextInput style={InputField.container} label="Answer" onChangeText={setAnswer} />

      <Button onPress={handleQuestionSubmit} title="Add Question" />
    </>
  );
};

export default NewShortAnswerQuestion;
