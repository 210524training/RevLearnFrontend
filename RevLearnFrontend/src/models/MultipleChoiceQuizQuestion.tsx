import { MultipleChoiceOption, MultipleChoicePossibleAnswer } from "../types/MyTypes";
import QuizQuestion from "./QuizQuestion";

export default interface MultipleChoiceQuizQuestion extends QuizQuestion {
  correctAnswer: MultipleChoiceOption,
  choices: MultipleChoicePossibleAnswer[],
}
