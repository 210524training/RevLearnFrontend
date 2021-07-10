import { Activity } from './Activity';
import { QuizQuestion } from './QuizQuestion';
import { QuizSubmission } from './QuizSubmission';

/**
 * Represents the data of an assignment
 * @property submissions: QuizSubmission[]
 * @property passingGrade: number
 * @property questions: QuizQuestion[]
 * @extends Activity
 */
export interface Quiz extends Activity{
  submissions: QuizSubmission[],
  passingGrade: number,
  questions: QuizQuestion[],
}
