import QuizQuestion from "./QuizQuestion";

export default interface ShortAnswerQuestion extends QuizQuestion {
  correctAnswer: string,
}