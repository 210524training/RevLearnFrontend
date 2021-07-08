/**
 * Represents the data of an assignment
 * @property questionID: string
 * @property questionTitle: string
 * @property pointValue: string
 * @property prompt: string
 * @extends QuizQuestion
 */
export default interface QuizQuestion{
  questionID: string,
  questionTitle: string,
  pointValue: string,
  prompt: string,
}