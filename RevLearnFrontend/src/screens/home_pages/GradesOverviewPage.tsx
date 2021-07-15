/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';
import DisplayCourseList from '../../components/display_list/DisplayCourseList';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { Assignment } from '../../models/Assignment';
import { AssignmentGrade } from '../../models/AssignmentGrade';
import { AssignmentSubmission } from '../../models/AssignmentSubmission';
import { Course } from '../../models/Course';
import { CourseGrade, toNumGrade } from '../../models/CourseGrade';
import { Quiz } from '../../models/Quiz';
import { QuizSubmission } from '../../models/QuizSubmission';
import { courses } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { LetterGrade } from '../../types/MyTypes';

type Props = {

}

/**
 * Finds the highest grade on an assignment.
 * @param accumulator Current highest grade: number
 * @param currentValue Current value: AssignmentSubmission | QuizSubmission
 * @returns number
 */
const SubmissionsReducer = (accumulator: number, currentValue: AssignmentSubmission | QuizSubmission): number => {
  const user = useAppSelector<UserState>(selectUser);
  if(currentValue.studentID === user.id) {
    const { grade } = currentValue;
    const newGrade = (typeof (grade) !== 'number') ? toNumGrade(grade) : grade;
    return accumulator < newGrade ? newGrade : accumulator;
  }
  return accumulator;
};
/**
 * Creates an array of a students assignments grades.
 * @param accumulator Current assignment.
 * @param currentValue Array of assignments
 * @returns Array of assignments
 */
const activitiesReducer = (accumulator:AssignmentGrade[], currentValue: (Assignment | Quiz)): AssignmentGrade[] => {
  const grade = currentValue.submissions.reduce(SubmissionsReducer, 0);
  accumulator.push({ grade, assignmentID: currentValue.ID });
  return accumulator;
};
/**
 * totals the assignment grades
 * @param accumulator Current assignment grade.
 * @param currentValue courrt total
 * @returns Total grade value
 */
const totalGradeReducer = (accumulator: number, currentValue: AssignmentGrade): number => {
  const { grade } = currentValue;
  accumulator = (typeof (grade) !== 'number') ? toNumGrade(grade as LetterGrade) : grade;
  return accumulator;
};
const calculateCourseGrade = (course: Course) => {
  const activitiesGrades: AssignmentGrade[] = course.activities.reduce(activitiesReducer, []);
  const courseGrades: CourseGrade = {
    grade: activitiesGrades.reduce(totalGradeReducer, 0) / activitiesGrades.length,
    courseId: course.id,
  };
  return courseGrades;
};

const awaitRequest = async (set: React.Dispatch<React.SetStateAction<Course[] | undefined>>) => {
  // set(await getCoursesByUserID('123'));
};

const GradesOverviewPage: React.FC<Props> = (props) => {
  const [coursesList, setCourses] = useState<Course[]>(courses);
  const [grades, setCourseGrades] = useState<CourseGrade[]>([]);
  useEffect(() => {
    //
  }, []);
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
