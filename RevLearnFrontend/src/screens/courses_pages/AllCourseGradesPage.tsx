import React from 'react';
import { Text } from 'react-native';
import CourseGradesStudentView from '../../components/course_grades/CourseGradesStudentView';
import CourseGradesTeacherView from '../../components/course_grades/CourseGradesTeacherView';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { Course } from '../../models/Course';

type Props = {

}

const AllCourseGradesPage: React.FC<Props> = () => (<>
  {/* <CourseGradesTeacherView course={course} /> */}

  <CourseGradesStudentView/>
</>);

export default WithCourseNavbar(AllCourseGradesPage);
