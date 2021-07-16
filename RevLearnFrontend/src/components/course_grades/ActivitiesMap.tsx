/* eslint-disable array-callback-return */
import React from 'react';
import { View, Text } from 'react-native';
import { Assignment } from '../../models/Assignment';
import { Quiz } from '../../models/Quiz';
import SubmissionMap from './SubmissionsMap';

type Props = {
  Activities: (Assignment | Quiz)[],
}

function isAssignmment(object: any): object is Assignment {
  return 'type' in object;
}

const ActivitiesMap: React.FC<Props> = ({ Activities }) => (
  <>
    {Activities.map((element, index: number) => (
      <View key={index}>
        {isAssignmment(element)
          ? (<>
            <Text>Assignment: {element.title}</Text>
            <Text>Type: {element.type}</Text>
          </>)
          : (<>
            <Text>Quiz: {element.title}</Text>
          </>)
        }
        <Text>Start Date: {element.startDate}</Text>
        <Text>Due Date: {element.dueDate}</Text>

        {element.submissions && <SubmissionMap Submissions={element.submissions}/>}

      </View>
    ))}
  </>
);

export default ActivitiesMap;
