import { AssignmentType, LetterGrade } from "../types/MyTypes";
import Activity from "./Activity";
import AssignmentSubmission from "./AssignmentSubmission";

export default interface Assignment extends Activity{
  type: AssignmentType,
  submissions: AssignmentSubmission[],
  passingGrade: LetterGrade,
}