import React, { useState } from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, Text, TextInput } from 'react-native';
import { useAppDispatch } from '../../hooks';
import { addQuestion } from '../../hooks/slices/question.slice';
import { v4 as uuidv4 } from 'uuid';

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
      <Text>Question Title</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={setTitle} />

      <Text>Point Value</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={setPointValue} />

      <Text>Question Prompt</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={setPrompt} />

      <Text>Answer</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={setAnswer} />

      <Button onPress={handleQuestionSubmit} title="Add Question" />
    </>
  );
}

export default NewShortAnswerQuestion;