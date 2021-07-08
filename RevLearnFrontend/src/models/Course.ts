/**
 * Represents the data of an assignment
 * @property courseID: string
 * @property courseTitle: string
 * @property startDate: Date
 * @property endDate: Date
 * @property teacher: string
 * @property passingGrade: string
 * @property students: string[]
 * @property category: string
 * @property assignments: string[]
 * @property quizzes: string[]
 */
export default interface Course{
  courseID: string,
  courseTitle: string,
  startDate: Date,
  endDate: Date,
  teacher: string,
  passingGrade: string,
  students: string[],
  category: string,
  assignments: string[],
  quizzes: string[],
}