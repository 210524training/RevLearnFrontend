/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import useCalcGrades from '../../hooks/useCalcGrades';
import { Course } from '../../models/Course';
import { CourseGrade } from '../../models/CourseGrade';
import { getStudentCourses } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';

type Props = {

}

const awaitRequest = async (userID: string, set: React.Dispatch<React.SetStateAction<Course[] | undefined>>) => {
  set(await getStudentCourses(userID));
};

const GradesOverviewPage: React.FC<Props> = (props) => {
  const [coursesList, setCourses] = useState<Course[]>();
  const [grades, setCourseGrades] = useState<CourseGrade[]>([]);
  const user = useAppSelector<UserState>(selectUser);
  useEffect(() => {
    awaitRequest(user ? user.id : '', setCourses);
  }, []);
  useEffect(() => {
    if(coursesList) {
      useCalcGrades(coursesList, user ? user.id : '', setCourseGrades);
    }
  }, [coursesList]);
  return (
    <>
      <Text>My Grades</Text>
      {coursesList
        ? (
          coursesList.map((course) => (<>
            <Text>{course.courseTitle}</Text>
          </>
          )))
        : <> </>
      }
    </>
  );
};

export default WithHomeNavbar(GradesOverviewPage);
