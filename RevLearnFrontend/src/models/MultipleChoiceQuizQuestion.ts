import { MultipleChoiceOption, MultipleChoicePossibleAnswer } from '../types/MyTypes';
import { QuizQuestion } from './QuizQuestion';

/**
 * Represents the data of an assignment
 * @property correctAnswer: MultipleChoiceOption
 * @property choices: MultipleChoicePossibleAnswer[]
 * @extends QuizQuestion
 */
export interface MultipleChoiceQuizQuestion extends QuizQuestion {
  correctAnswer: MultipleChoiceOption,
  choices: MultipleChoicePossibleAnswer[],
}
