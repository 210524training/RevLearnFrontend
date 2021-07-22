import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import NewShortAnswerQuestion from './NewShortAnswerQuestion';
import NewMultipleChoiceQuestion from './NewMultipleChoiceQuestion';
import { LandingPageStyles } from '../../styles/LandingPageStyles';
import { Container } from '../../styles/Container';

type Props = {

}

const NewQuestion: React.FC<Props> = (props) => {
  const [questionType, setQuestionType] = useState<number>(0);

  const options = ['Short Answer', 'Multiple Choice'];

  return (
    <View style={Container.container}>
      <Text style={LandingPageStyles.headerFont}>Form New Question</Text>
      <ButtonGroup onPress={setQuestionType} selectedIndex={questionType} buttons={options} />
      {
        (!questionType)
          ? <NewShortAnswerQuestion />
          : <NewMultipleChoiceQuestion />
      }
    </View>
  );
};

export default NewQuestion;
