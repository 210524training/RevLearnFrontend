import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useAppSelector } from '../../hooks';
import { CourseState, getCourse } from '../../hooks/slices/course.slice';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import useCalcGrades from '../../hooks/useCalcGrades';
import { Course } from '../../models/Course';
import { CourseGrade } from '../../models/CourseGrade';
import { User } from '../../models/User';
import { getStudentCourses } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { getActivityByID, getCourseByID, getStudentSubmissions } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import ActivitiesMap from './ActivitiesMap';

type Props = {
}

const CourseGradesStudentView: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState<CourseGrade>();
  const nav = useNavigation();
  const user = useAppSelector<UserState>(selectUser);
  const course = useAppSelector<CourseState>(getCourse);
  useEffect(() => {
    if(!user) {
      nav.navigate('Root');
    }
  }, []);

  const log = () => console.log('user', user);
  return (
    <View>
      {(user && course) && (
        <View>
          <Text>Course: {course.courseTitle}:</Text>
          <Text>Assignments / Quizzes</Text>
          <ActivitiesMap Activities={course.activities}/>
        </View>
      )
      }
    </View>
  );
};

export default CourseGradesStudentView;
