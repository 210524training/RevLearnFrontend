import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import useCalcGrades from '../../hooks/useCalcGrades';
import { Course } from '../../models/Course';
import { CourseGrade } from '../../models/CourseGrade';
import { User } from '../../models/User';
import { getStudentCourses } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { getActivityByID, getStudentSubmissions } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import ActivitiesMap from './ActivitiesMap';

type Props = {
}

const CourseGradesStudentView: React.FC<Props> = (props) => {
  const [coursesList, setCourses] = useState<Course[]>();
  const [selected, setSelected] = useState<CourseGrade>();
  const nav = useNavigation();
  const user = useAppSelector<UserState>(selectUser);
  useEffect(() => {
    if(!user) {
      nav.navigate('Root');
    } else {
      console.log('useEffect hook');
      (async () => {
        const result = await getStudentCourses(user.id);
        console.log('retrived course: ');
        setCourses(result);
      })();
    }
  }, []);

  return (
    <View>
      <Text>Grades for {}:</Text>
      {user && coursesList
      && coursesList.map((course, index) => (
        <View key={index}>
          <Text>Course: {course.courseTitle}:</Text>
          <Text>Assignments / Quizzes</Text>
          <ActivitiesMap Activities={course.activities}/>
        </View>
      ))
      }
    </View>
  );
};

export default CourseGradesStudentView;
