import React from 'react';
import { Text } from 'react-native';
import CourseGradesStudentView from '../../components/course_grades/CourseGradesStudentView';
import CourseGradesTeacherView from '../../components/course_grades/CourseGradesTeacherView';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { User } from '../../models/User';

type Props = {

}

const CourseGradesPage: React.FC<Props> = () => {
  const user: User = useAppSelector<UserState>(selectUser);

  return (
    <>
      {
        user.role === 'Student' ? (
          <CourseGradesStudentView />
        ) : (
          <CourseGradesTeacherView />
        )
      }
    </>
  );
};

export default WithCourseNavbar(CourseGradesPage);
