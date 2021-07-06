import React, { useState } from 'react';
import { Text } from 'react-native';
import NewQuestion from '../../../components/quiz_entry/NewQuestion';
import QuizQuestion from '../../../models/QuizQuestion';

type Props = {

}

const CreateQuizPage: React.FC<Props> = (props) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  return (
    <>
      {
        questions.map((question) => (
          <>
            <Text>{question.questionTitle}</Text>
            <Text>{question.prompt}</Text>
          </>
        ))
      }
      <NewQuestion />
    </>
  );
};

export default CreateQuizPage;
