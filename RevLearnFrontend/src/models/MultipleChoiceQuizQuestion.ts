import { MultipleChoiceOption, MultipleChoicePossibleAnswer } from "../types/MyTypes";
import QuizQuestion from "./QuizQuestion";

/**
 * Represents the data of an assignment
 * @property correctAnswer: MultipleChoiceOption
 * @property choices: MultipleChoicePossibleAnswer[]
 * @extends QuizQuestion
 */
export default interface MultipleChoiceQuizQuestion extends QuizQuestion {
  correctAnswer: MultipleChoiceOption,
  choices: MultipleChoicePossibleAnswer[],
}