import Activity from "./Activity";
import QuizQuestion from "./QuizQuestion";
import QuizSubmission from "./QuizSubmission";

export default interface Quiz extends Activity{
  submissions: QuizSubmission[],
  passingGrade: number,
  questions: QuizQuestion[],
}