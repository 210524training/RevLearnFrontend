import { QuizQuestion } from './QuizQuestion';

export interface ShortAnswerQuestion extends QuizQuestion {
  correctAnswer: string,
}
