import Submission from "./Submission";

export default interface AssignmentSubmission extends Submission{
  grade: string,
  attachment: string[],
}