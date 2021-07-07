import React, { useState } from 'react';
import { Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import NewShortAnswerQuestion from './NewShortAnswerQuestion';
import NewMultipleChoiceQuestion from './NewMultipleChoiceQuestion';


type Props = {

}

const NewQuestion: React.FC<Props> = (props) => {
  
  const [questionType, setQuestionType] = useState<number>(0);

  const options = ['Short Answer', 'Multiple Choice'];
  
  return (
    <>
    <Text>New Question</Text>
    <ButtonGroup onPress={setQuestionType} selectedIndex={questionType} buttons={options} />
    {
      (!questionType) ? 
      <NewShortAnswerQuestion /> :
      <NewMultipleChoiceQuestion />
    }
    </>
  );
};

export default NewQuestion;
