import { Role } from '../types/MyTypes';
import { Assignment } from './Assignment';
import { CourseGrade } from './CourseGrade';
import { Submission } from './Submission';

/**
 * Represents the data of a user
 * @property username: string
 * @property password: string
 * @property courses: []
 * @property role: string
 * @property userID: string
 */
export interface User{
  username: string,
  password: string,
  courses: [],
  role: Role,
  userID: string,
  courseGrades?: Submission[],
}
