import React, { useState } from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, Text, TextInput } from 'react-native';

type Props = {

}

const NewQuestion: React.FC<Props> = (props) => {

  const [title, setTitle] = useState<string>('');
  const [pointValue, setPointValue] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const handleQuestionSubmit = (ev: NativeSyntheticEvent<NativeTouchEvent>) => {
    
    const newQuestion = {
      questionID: '1',
      questionTitle: title,
      correctAnswer: answer,
      pointValue,
      prompt,
    }

    // TODO: send the question data somewhere
  }

  return (
    <>
      <Text>Question Title</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={setTitle} />

      <Text>Question Title</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={setPointValue} />

      <Text>Question Prompt</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={setPrompt} />

      <Text>Answer</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={setAnswer} />

      <Button onPress={handleQuestionSubmit} title="Add Question" />
    </>
  )
}

export default NewQuestion;