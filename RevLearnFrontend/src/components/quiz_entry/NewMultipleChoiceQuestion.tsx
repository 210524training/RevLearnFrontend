import React, { useState } from 'react';
import { Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
// eslint-disable-next-line import/no-extraneous-dependencies
import RadioForm from 'react-native-simple-radio-button';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../hooks';
import { addQuestion } from '../../hooks/slices/question.slice';
import { MultipleChoiceQuizQuestion } from '../../models/MultipleChoiceQuizQuestion';
import { MultipleChoiceOption, MultipleChoicePossibleAnswer } from '../../Types/MyTypes';
import { InputField } from '../../styles/InputField';
import { LandingPageStyles } from '../../styles/LandingPageStyles';

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
    { label: 'A', value: 'OptionA' },
    { label: 'B', value: 'OptionB' },
    { label: 'C', value: 'OptionC' },
    { label: 'D', value: 'OptionD' },
  ];

  const handleQuestionSubmit = () => {
    const choices: MultipleChoicePossibleAnswer[] = [
      { option: 'OptionA', answer: optionA },
      { option: 'OptionB', answer: optionB },
      { option: 'OptionC', answer: optionC },
      { option: 'OptionD', answer: optionD },
    ];

    const newQuestion: MultipleChoiceQuizQuestion = {
      questionID: uuidv4(),
      questionTitle: title,
      correctAnswer: answer,
      pointValue: Number(pointValue),
      choices,
      prompt,
    };

    dispatch(addQuestion(newQuestion));
  };

  return (
    <>
      <TextInput style={InputField.newQuestionContainer} label="Question Title" onChangeText={setTitle} />

      <TextInput style={InputField.newQuestionContainer} label="Point Value" onChangeText={setPointValue} />

      <TextInput style={InputField.newQuestionContainer} label="Question Prompt"onChangeText={setPrompt} />

      <TextInput style={InputField.newQuestionContainer} label="Option A" onChangeText={setOptionA} />

      <TextInput style={InputField.newQuestionContainer} label="Option B" onChangeText={setOptionB} />

      <TextInput style={InputField.newQuestionContainer} label="Option C" onChangeText={setOptionC} />

      <TextInput style={InputField.newQuestionContainer} label="Option D" onChangeText={setOptionD} />

      <Text style={LandingPageStyles.h2}>Correct Answer:</Text>

      { /* Ignore this error, it works fine */}
      <RadioForm selectedButtonColor={'black'} buttonColor={'black'} radio_props={radioOptions} initial={0} onPress={(value: string) => setAnswer(value as MultipleChoiceOption)} />

      <Button mode="contained" color="#19D9FF" onPress={handleQuestionSubmit}>Add Question</Button>
    </>
  );
};

export default NewShortAnswerQuestion;
