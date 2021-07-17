import React from 'react';
import { Text, View } from 'react-native';
import { Assignment } from '../../models/Assignment';
import { Course } from '../../models/Course';
import { Quiz } from '../../models/Quiz';
import { getActivities, getUserByID } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {
  course: Course
}

const CourseGradesTeacherView: React.FC<Props> = (props) => {
  const activities: (Quiz | Assignment)[] = getActivities(props.course);

  return (
    <View>
      {
        /*  activities.map((activity) => (
          <>
            <Text>{activity.title}</Text>
            {
              activity.submissions.map((submission) => {
                const user = getUserByID(submission.studentID);
                return (
                  <Text>{user.username}: {submission.grade}</Text>
                );
              })
            }
          </>
        )) */
      }
    </View>
  );
};

export default CourseGradesTeacherView;
