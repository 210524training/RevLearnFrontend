import React from 'react';
import CourseGradesStudentView from '../../components/course_grades/CourseGradesStudentView';
import CourseGradesTeacherView from '../../components/course_grades/CourseGradesTeacherView';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { Course } from '../../models/Course';
import { User } from '../../models/User';

type Props = {

}

const CourseGradesPage: React.FC<Props> = () => {
  const user: User = useAppSelector<UserState>(selectUser);

  const course: Course = {
    courseID: '1234',
    courseTitle: 'Calculus',
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
    teacher: 'ProfessorC',
    passingGrade: 'C',
    category: 'Mathematic',
    students: [],
    assignments: [],
    quizzes: [],
  };

  return (
    <>
      {
        // user.role === 'Student' ? (
        true ? (
          <CourseGradesStudentView user={user} course={course}/>
        ) : (
          <CourseGradesTeacherView />
        )
      }
    </>
  );
};

export default WithCourseNavbar(CourseGradesPage);
