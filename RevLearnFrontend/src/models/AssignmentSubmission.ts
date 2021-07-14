import { LetterGrade } from '../types/MyTypes';
import { Submission } from './Submission';

/**
 * Represents the data of an assignment
 * @property grade: string
 * @property attachment: string[]
 * @extends Submission
 */
export interface AssignmentSubmission extends Submission{
  grade: LetterGrade,
  attachment: string[],
}
