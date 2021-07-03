import { MultipleChoiceOption } from "../types/MyTypes";
import QuizQuestion from "./QuizQuestion";

export default interface MultipleChoiceQuizQuestion extends QuizQuestion {
answer: MultipleChoiceOption,
choices: Multi[],


}