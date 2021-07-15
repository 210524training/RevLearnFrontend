import { Activity } from './Activity';
import { Assignment } from './Assignment';
import { Quiz } from './Quiz';
import { User } from './User';

/**
 * Represents the data of an assignment
 * @property courseID: string
 * @property courseTitle: string
 * @property startDate: Date
 * @property endDate: Date
 * @property teacher: string
 * @property passingGrade: string
 * @property students: string[]
 * @property category: string
 * @property activities: Activity[]
 */
export interface Course{
  id: string,
  courseTitle: string,
  startDate: string,
  endDate: string,
  teacherID: string,
  passingGrade: string,
  students: string[],
  category: string,
  activities: (Assignment | Quiz)[],
  admissionRequests: string[],
}
