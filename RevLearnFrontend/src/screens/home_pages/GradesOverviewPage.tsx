/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import MapGrades from '../../components/MapGrades';
import { useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import useCalcGrades from '../../hooks/useCalcGrades';
import { Course } from '../../models/Course';
import { CourseGrade } from '../../models/CourseGrade';
import { getStudentCourses } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';

type Props = {

}

const GradesOverviewPage: React.FC<Props> = (props) => {
  const [coursesList, setCourses] = useState<Course[]>();
  const [grades, setCourseGrades] = useState<CourseGrade[]>([]);
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
        // eslint-disable-next-line no-unused-expressions
        result && result.map((element: Course) => { console.log(element); });
        setCourses(result);
      })();
    }
  }, []);

  useEffect(() => {
    (async () => {
      if(coursesList) {
        const gradesResult = await useCalcGrades(coursesList, user ? user.id : '123');
        setCourseGrades(gradesResult);
      }
    })();
  }, [coursesList]);

  return (
    <>
      <Text>My Grades</Text>
      {grades && coursesList
        ? (
          <MapGrades Courses={coursesList} List={grades} set={setSelected}/>
        )
        : <> </>
      }
    </>
  );
};

export default WithHomeNavbar(GradesOverviewPage);
