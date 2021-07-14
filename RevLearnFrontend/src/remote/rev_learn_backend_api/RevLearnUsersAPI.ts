// Temp sever calls go here.
import { User } from '../../models/User';
import { Quiz } from '../../models/Quiz';
import { Course } from '../../models/Course';
import { QuizSubmission } from '../../models/QuizSubmission';
import { AssignmentSubmission } from '../../models/AssignmentSubmission';
import { Assignment } from '../../models/Assignment';
import BackendClient from '../RevLearnBackendClient';

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

export function getUserByID(id: string) {
  console.log(id);
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

export function getActivities(course: Course) {
  console.log(course);

  const submission: QuizSubmission = {
    submissionID: '1',
    studentID: '1',
    activityID: '1',
    submissionDate: new Date(),
    grade: 80,
  };

  const quiz: Quiz = {
    ID: '1',
    startDate: new Date(),
    dueDate: new Date(),
    passingGrade: 75,
    questions: [],
    title: 'Quiz 1',
    description: 'Description of quiz',
    submissions: [submission],
  };

  return [quiz];
}

export function getActivityByID(id: string): Quiz | Assignment {
  console.log(id);
  const quiz: Quiz = {
    ID: '1',
    startDate: new Date(),
    dueDate: new Date(),
    passingGrade: 75,
    questions: [],
    title: 'Quiz 1',
    description: 'Description of quiz',
    submissions: [],
  };

  return quiz;
}
/**
 * Returns all of a student's submissions for a given course
 * @param course
 * @param user
 */
export function getStudentSubmissions(course: Course, user: User): (QuizSubmission | AssignmentSubmission)[] {
  console.log(course);
  console.log(user);

  const submission: QuizSubmission = {
    submissionID: '1',
    studentID: '1',
    activityID: '1',
    submissionDate: new Date(),
    grade: 80,
  };

  return [submission];
}

/**
 * Sends create assignment request.
 * @param assignment Assignment
 */
export function CreateAssignment(assignment: Assignment) {
  console.log(assignment);
}

/**
 * Sends a request to create a course
 * @param courseTitle ,
 * @param startDate ,
 * @param endDate ,
 * @param teacher ,
 * @param passingGrade ,
 * @param category ,
 */
export function createNewCourse(courseID: string, courseTitle: string, startDate: string, endDate: string, teacher: string, passingGrade: string, category: string) {
  console.log(courseID, courseTitle, startDate, endDate, teacher, passingGrade, category);
}

export function getCourseByID(id: string): Course {
  const student: User = {
    username: 'michael',
    password: '123',
    courses: [],
    role: 'Student',
    userID: '456',
  };

  return {
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
    admissionRequests: [student],
  };
}

export function updateCourse(course: Course) {
  console.log(course);
}
export function getAllTeachers() {
  const teachers: User = {
    username: 'Brenda',
    password: '123',
    courses: [],
    role: 'Teacher',
    userID: '456',
  };
  const teachers2: User = {
    username: 'Donna',
    password: '123',
    courses: [],
    role: 'Teacher',
    userID: '123',
  };

  return [teachers, teachers2];
}

export function createNewTeacher(userID: string, username: string, password: string, role: string) {
  console.log(userID, username, password, role);
}

// update password on settings page
export function updatePassword(password: string, userID: string) {
  console.log(password, userID);
}

export function uploadFile(formData: FormData) {
  BackendClient.post('/upload', formData).then((res) => { console.log('successfull', res.data); });
}
