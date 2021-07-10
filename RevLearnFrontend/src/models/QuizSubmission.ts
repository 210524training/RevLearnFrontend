import { Submission } from './Submission';

/**
 * Represents the data of an assignment
 * @property grade: number
 * @extends Submission
 */
export interface QuizSubmission extends Submission{
  grade: number,
}
