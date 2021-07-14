import React from 'react';
import CourseGradesTeacherView from '../../components/course_grades/CourseGradesTeacherView';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { Course } from '../../models/Course';

type Props = {

}

const AllCourseGradesPage: React.FC<Props> = () => {
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
    <CourseGradesTeacherView course={course} />
  );
};

export default WithCourseNavbar(AllCourseGradesPage);
