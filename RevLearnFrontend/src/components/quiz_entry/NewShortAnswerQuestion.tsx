import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../hooks';
import { addQuestion } from '../../hooks/slices/question.slice';
import { InputField } from '../../styles/InputField';

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
      <TextInput style={InputField.container} label="Question Title" onChangeText={setTitle} />

      <TextInput style={InputField.container} label="Point Value" onChangeText={setPointValue} />

      <TextInput style={InputField.container} label="Question Prompt" onChangeText={setPrompt} />

      <TextInput style={InputField.container} label="Answer" onChangeText={setAnswer} />

      <Button mode="contained" color="#19D9FF" onPress={handleQuestionSubmit}>Add Question</Button>
    </>
  );
};

export default NewShortAnswerQuestion;
