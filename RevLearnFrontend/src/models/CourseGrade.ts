import { LetterGrade } from '../types/MyTypes';

/**
 * Represents a users grade in a course.
 * @property courseId: string
 * @property grade: number
 */
export interface CourseGrade {
  courseId: string,
  grade: number | string,
}

/**
 * Changes a number grade inta a letter grade
 * @param letterGrade: LetterGrade
 * @returns Number 60 - 100;
 */
export const toNumGrade = (letterGrade: LetterGrade) => {
  switch (letterGrade) {
  case 'A':
    return 100;
  case 'B':
    return 90;
  case 'C':
    return 80;
  case 'D':
    return 70;
  default:
    return 60;
  }
};

/**
 * Changes a number grade to be a letter grade.
 * @param numGrade: number
 * @returns LetterGrade
 */
export const toLetterGrade = (numGrade: number): LetterGrade => {
  switch (true) {
  case numGrade > 90:
    return 'A';
  case numGrade > 80:
    return 'B';
  case numGrade > 70:
    return 'C';
  case numGrade > 60:
    return 'D';
  default:
    return 'F';
  }
};
