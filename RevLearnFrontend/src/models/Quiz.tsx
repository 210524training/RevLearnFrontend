import Activity from "./Activity";
import QuizSubmission from "./QuizSubmission";

export default interface Quiz extends Activity{
submissions: QuizSubmission[],
passingGrade: number,
questions: [],



}