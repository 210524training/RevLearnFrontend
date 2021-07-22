import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppSelector } from '../../hooks';
import { CourseState, getCourse } from '../../hooks/slices/course.slice';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import useCalcGrades from '../../hooks/useCalcGrades';
import { Course } from '../../models/Course';
import { CourseGrade } from '../../models/CourseGrade';
import { User } from '../../models/User';
import { getStudentCourses } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import ActivitiesMap from './ActivitiesMap';
import { CourseHome } from '../../styles/CourseHome';
import B from '../BoldText';

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
    <ScrollView>
      <View style={CourseHome.container}>
        {(user && course) && (
          <View style={CourseHome.card}>
            <Text style={CourseHome.item}><B input={'Course: '} />{course.courseTitle}:</Text>
            <Text style={CourseHome.item2}><B input={'Assignments / Quizzes'} /></Text>
            {console.log('activities: ', course.activities)}
            <ActivitiesMap Activities={course.activities}/>
          </View>
        )
        }
      </View>
    </ScrollView>

  );
};

export default CourseGradesStudentView;
