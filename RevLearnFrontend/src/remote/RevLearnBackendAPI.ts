// Temp sever calls go here.
import { User } from '../models/User';
import { Quiz } from '../models/Quiz';
import { Course } from '../models/Course';

const newStudent: User = {
  username: 'michael',
  password: '123',
  courses: [],
  role: 'Student',
  userID: '456',
};

const newStudent2: User = {
  username: 'jon',
  password: '123',
  courses: [],
  role: 'Student',
  userID: '123',
};

const newvar2: Course = {
  courseID: '1234',
  courseTitle: 'Computer Science',
  startDate: new Date(Date.now()),
  endDate: new Date(Date.now()),
  teacher: 'ProfessorA',
  passingGrade: 'C',
  category: 'Software Engineering',
  students: [],
  assignments: [],
  quizzes: [],
};

const newvar: Course = {
  courseID: '1234',
  courseTitle: 'Calculus',
  startDate: new Date(Date.now()),
  endDate: new Date(Date.now()),
  teacher: 'ProfessorC',
  passingGrade: 'C',
  category: 'Mathematic',
  students: [],
  assignments: [],
  quizzes: [],
};

export const courses: Array<Course> = [newvar, newvar2];

/**
 *
 * @param input string
 */
function test55(input: string) {
  //
}

/**
 * Send a new quiz to the back-end
 * @param quiz the quiz object
 */
export function createQuiz(quiz: Quiz) {
  //
}
/**
 *
 * @param username
 * @param password
 * @returns User: username, password
 */

export const sendLogin = async (username: string, password: string): Promise<User> => {
  console.log(username, password);

  /* const { data: user } = await revLearnClient.post<User>('/login', {
      username,
      password,
    });
   */
  console.log(newStudent);
  return newStudent;
};
/**
 *
 * @callAStudent to use as a placeholder in replace of the original grubdashClient method in RegisterPage.
 */
export function registerStudent() {
  return true;
}

export function getByUserName() {
  return newStudent;
}

/**
 * Use for updating a quiz with a new submission after the quiz is taken
 * @param quiz
 */
export function updateQuiz(quiz: Quiz) {
  //
}
export function getAllStudentsForCourse() {
  const studentArray: User[] = [newStudent, newStudent2];
  return studentArray;
}
