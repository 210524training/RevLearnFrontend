import { LetterGrade } from '../Types/MyTypes';
import { Attachment } from './Attachment';
import { Submission } from './Submission';

/**
 * Represents the data of an assignment
 * @property grade: string
 * @property attachment: string[]
 * @extends Submission
 */
export interface AssignmentSubmission extends Submission{
  grade?: LetterGrade,
  attachment: Attachment[],
}
