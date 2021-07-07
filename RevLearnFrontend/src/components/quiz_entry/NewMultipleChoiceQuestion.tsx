import React, { useState } from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, Text, TextInput } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { useAppDispatch } from '../../hooks';
import { addQuestion } from '../../hooks/slices/question.slice';
import MultipleChoiceQuizQuestion from '../../models/MultipleChoiceQuizQuestion';
import { MultipleChoiceOption, MultipleChoicePossibleAnswer } from '../../Types/MyTypes';

const NewShortAnswerQuestion: React.FC<unknown> = () => {
  const [title, setTitle] = useState<string>('');
  const [pointValue, setPointValue] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [optionA, setOptionA] = useState<string>('');
  const [optionB, setOptionB] = useState<string>('');
  const [optionC, setOptionC] = useState<string>('');
  const [optionD, setOptionD] = useState<string>('');
  const [answer, setAnswer] = useState<MultipleChoiceOption>('OptionA');

  const dispatch = useAppDispatch();

  const radioOptions = [
    {label: 'A', value: 'OptionA'},
    {label: 'B', value: 'OptionB'},
    {label: 'C', value: 'OptionC'},
    {label: 'D', value: 'OptionD'},
  ];

  const handleQuestionSubmit = (ev: NativeSyntheticEvent<NativeTouchEvent>) => {
    
    const choices: MultipleChoicePossibleAnswer[] = [
      {option: 'OptionA', answer: optionA},
      {option: 'OptionB', answer: optionB},
      {option: 'OptionC', answer: optionC},
      {option: 'OptionD', answer: optionD},
    ];

    const newQuestion: MultipleChoiceQuizQuestion = {
      questionID: '0',
      questionTitle: title,
      correctAnswer: answer,
      choices,
      pointValue,
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

      <Text>Option A</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={setOptionA} />

      <Text>Option B</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={setOptionB} />

      <Text>Option C</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={setOptionC} />

      <Text>Option D</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={setOptionD} />

      <Text>Correct Answer:</Text>
      <RadioForm radio_props={radioOptions} initial={0} onPress={(value: string) => setAnswer(value as MultipleChoiceOption)} />

      <Button onPress={handleQuestionSubmit} title="Add Question" />
    </>
  );
}

export default NewShortAnswerQuestion;