import Submission from './Submission';

/**
 * Represents the data of an assignment
 * @property grade: number
 * @extends Submission
 */
export default interface QuizSubmission extends Submission{
  grade: number,
};
