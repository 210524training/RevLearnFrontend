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

export default function useCalcGrades(coursesList: Course[], id: string, set: any) {
  userID = id;
  const courseGrades: CourseGrade[] = [];
  coursesList.map((element) => {
    const activitiesGrades: AssignmentGrade[] = element.activities.reduce(activitiesReducer, []);
    const courseGrade: CourseGrade = {
      grade: activitiesGrades.reduce(totalGradeReducer, 0) / activitiesGrades.length,
      courseId: element.id,
    };
    courseGrades.push(courseGrade);
  });
  set(courseGrades);
}
