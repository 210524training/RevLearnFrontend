import React from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Course } from '../../models/Course';
import { User } from '../../models/User';
import { getActivityByID, getStudentSubmissions } from '../../remote/RevLearnBackendAPI';

type Props = {
  user: User,
  course: Course,
}

const CourseGradesStudentView: React.FC<Props> = (props) => {
  const submissions = getStudentSubmissions(props.course, props.user);

  return (
    <View>
      <Text>Grades for {props.user.username}:</Text>
      {
        submissions.map((submission, index) => {
          const activity = getActivityByID(submission.activityID);
          return (
            <ListItem key={index}>
              <Text>{activity.title}:</Text>
              <Text>{submission.grade}</Text>
            </ListItem>
          );
        })
      }
    </View>
  );
};

export default CourseGradesStudentView;
