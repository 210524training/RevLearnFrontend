import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { AssignmentSubmission } from '../../models/AssignmentSubmission';
import { QuizSubmission } from '../../models/QuizSubmission';
import { Submission } from '../../models/Submission';
import { CourseHome } from '../../styles/CourseHome';
import B from '../BoldText';
import DisplayFiles from '../display_list/DisplayFiles';

type Props = {
  Submissions: (AssignmentSubmission | QuizSubmission) []
}

function isAssignmmentSub(object: any): object is AssignmentSubmission {
  return 'attachment' in object;
}

const SubmissionMap: React.FC<Props> = ({ Submissions }) => (
  <>
    {Submissions
    && Submissions.map((element: AssignmentSubmission | QuizSubmission, index: number) => (
      <View key={index}>
        {isAssignmmentSub(element)
          ? <Text style={CourseHome.item}><B input={'Assignment Submission:'}/> </Text>
          : <Text style={CourseHome.item}><B input={'Quiz Submission:'}/> </Text>
        }
        <Text style={CourseHome.item}><B input={'Submission ID: '}/> {element.submissionID}</Text>
        <Text style={CourseHome.item}><B input={'Submission Date: '}/> {element.submissionDate}</Text>
        <Text style={CourseHome.item}><B input={'Submission Grade: '}/> {element.grade}</Text>
        {isAssignmmentSub(element)
          && (
            <View style={CourseHome.item}>
              <Text style={CourseHome.item}><B input={'attachments: '}/></Text>
              <DisplayFiles attachments={element.attachment}/>
            </View>
          )
        }
      </View>
    ))
    }
  </>);

export default SubmissionMap;
