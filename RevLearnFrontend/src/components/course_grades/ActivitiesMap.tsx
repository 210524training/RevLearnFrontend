/* eslint-disable array-callback-return */
import React from 'react';
import { View, Text } from 'react-native';
import { Assignment } from '../../models/Assignment';
import { Quiz } from '../../models/Quiz';
import { CourseHome } from '../../styles/CourseHome';
import B from '../BoldText';
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
            <Text style={CourseHome.item2}><B input={'Assignment: '}/>{element.title}</Text>
            <Text style={CourseHome.item}><B input={'Type: '}/>{element.type}</Text>
          </>)
          : (<>
            <Text style={CourseHome.item}><B input={'Quiz: '}/>{element.title}</Text>
          </>)
        }
        <Text style={CourseHome.item}><B input={'Start Date: '}/>{element.startDate}</Text>
        <Text style={CourseHome.item}><B input={'Due Date: '}/>{element.dueDate}</Text>

        {element.submissions && <SubmissionMap Submissions={element.submissions}/>}

      </View>
    ))}
  </>
);

export default ActivitiesMap;
