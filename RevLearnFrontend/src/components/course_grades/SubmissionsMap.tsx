import React from 'react';
import { Text, View } from 'react-native';
import { AssignmentSubmission } from '../../models/AssignmentSubmission';
import { QuizSubmission } from '../../models/QuizSubmission';
import { Submission } from '../../models/Submission';

type Props = {
  Submissions: (AssignmentSubmission | QuizSubmission) []
}

function isAssignmmentSub(object: any): object is AssignmentSubmission {
  return 'attachment' in object;
}

const SubmissionMap: React.FC<Props> = ({ Submissions }) => (<>
  {Submissions
    && Submissions.map((element: AssignmentSubmission | QuizSubmission, index: number) => (
      <View key={index}>
        {isAssignmmentSub(element)
          ? <Text>Assignment Submission:</Text>
          : <Text>Quiz Submission:</Text>
        }
        <Text>Submission ID: {element.submissionID}</Text>
        <Text>Submission Date: {element.submissionDate}</Text>
        <Text>Submission Grade: {element.grade}</Text>
        {isAssignmmentSub(element)
          && <Text>// Todo display attachments: {element.attachment}</Text>
        }
      </View>
    ))
  }
</>);

export default SubmissionMap;
