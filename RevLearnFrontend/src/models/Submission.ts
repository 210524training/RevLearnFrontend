/**
 * Represents the data of an assignment
 * @property submissionID: string
 * @property student: string
 * @property activityID: string
 * @property submissionDate: Date
 */
export default interface Submission {
  submissionID: string,
  studentID: string,
  activityID: string,
  submissionDate: Date,
}