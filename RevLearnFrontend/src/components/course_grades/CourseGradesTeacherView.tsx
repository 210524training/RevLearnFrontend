import React from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from '../../hooks';
import { CourseState, getCourse } from '../../hooks/slices/course.slice';
import { Assignment } from '../../models/Assignment';
import { Course } from '../../models/Course';
import { Quiz } from '../../models/Quiz';
import { AssignmentPageStyle } from '../../styles/AssignmentPageStyle';
import B from '../BoldText';

type Props = {
}

const CourseGradesTeacherView: React.FC<Props> = (props) => {
  const course = useAppSelector<CourseState>(getCourse);
  console.log('course: ', course);
  return (
    <View style={AssignmentPageStyle.container}>
      {course
        && course.activities.map((activity, index) => (
          <View key={index} style={AssignmentPageStyle.listItemContainer}>
            <Text><B input={'Activity Title: '}/>{activity.title}</Text>
            {
              activity.submissions.map((submission, index1) => (
                <Text key={index1}>{submission.studentID}: {submission.grade}</Text>
              ))
            }
          </View>
        ))
      }
    </View>
  );
};

export default CourseGradesTeacherView;
