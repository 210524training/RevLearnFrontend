/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import * as React from 'react';
import { Assignment } from '../models/Assignment';
import { AssignmentGrade } from '../models/AssignmentGrade';
import { AssignmentSubmission } from '../models/AssignmentSubmission';
import { Course } from '../models/Course';
import { CourseGrade, toNumGrade } from '../models/CourseGrade';
import { Quiz } from '../models/Quiz';
import { QuizSubmission } from '../models/QuizSubmission';
import { LetterGrade } from '../types/MyTypes';

let userID: string;
/**
 * Finds the highest grade on an assignment.
 * @param accumulator Current highest grade: number
 * @param currentValue Current value: AssignmentSubmission | QuizSubmission
 * @returns number
 */
const SubmissionsReducer = (accumulator: number, currentValue: AssignmentSubmission | QuizSubmission): number => {
  if(currentValue.studentID === userID) {
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
  console.log('reducing subission: ', currentValue.title);
  const grade: number = currentValue ? currentValue.submissions.reduce(SubmissionsReducer, 0) : 0;
  console.log('reduced submission down to: ', grade);
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
  accumulator = (typeof (grade) !== 'number') ? accumulator + toNumGrade(grade as LetterGrade) : accumulator + grade;
  return accumulator;
};

export default function useCalcGrades(coursesList: Course[], id: string) {
  console.log('useCalc hook');
  userID = id;
  const courseGrades: CourseGrade[] = [];
  coursesList && coursesList.map((element: Course) => { console.log(element); });
  coursesList?.map((element) => {
    console.log('reducing activities for: ', element.courseTitle);
    const activitiesGrades: AssignmentGrade[] = element.activities ? element.activities.reduce(activitiesReducer, []) : [];
    console.log('activity reduced to: ', activitiesGrades);
    const courseGrade: CourseGrade = {
      grade: activitiesGrades[0] ? activitiesGrades.reduce(totalGradeReducer, 0) / activitiesGrades.length : 0,
      courseId: element.id,
    };
    courseGrades.push(courseGrade);
  });

  courseGrades && courseGrades.map((element: CourseGrade) => { console.log(element); });
  return courseGrades;
}
