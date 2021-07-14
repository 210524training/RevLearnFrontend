import { AssignmentType, LetterGrade } from '../types/MyTypes';
import { Activity } from './Activity';
import { AssignmentSubmission } from './AssignmentSubmission';

/**
 * Represents the data of an assignment
 * @property type: AssignmentType
 * @property submissions: AssignmentSubmission[]
 * @property passingGrade: LetterGrade
 * @extends Activity
 */
export interface Assignment extends Activity{
  type: AssignmentType,
  submissions: AssignmentSubmission[],
  passingGrade: LetterGrade,
}
