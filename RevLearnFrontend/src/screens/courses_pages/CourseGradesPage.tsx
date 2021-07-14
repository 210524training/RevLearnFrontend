import React from 'react';
import CourseGradesStudentView from '../../components/course_grades/CourseGradesStudentView';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { Course } from '../../models/Course';
import { User } from '../../models/User';

type Props = {

}

const CourseGradesPage: React.FC<Props> = () => {
  // const user: User = useAppSelector<UserState>(selectUser);

  const user: User = {
    username: 'jon',
    password: '123',
    courses: [],
    role: 'Student',
    id: '123',
  };

  const course: Course = {
    id: '1234',
    courseTitle: 'Calculus',
    startDate: new Date(Date.now()).toString(),
    endDate: new Date(Date.now()).toString(),
    teacherID: 'ProfessorC',
    passingGrade: 'C',
    category: 'Mathematic',
    students: [],
    activities: [],
    admissionRequests: [],
  };

  return (
    <CourseGradesStudentView user={user} course={course}/>
  );
};

export default WithCourseNavbar(CourseGradesPage);
