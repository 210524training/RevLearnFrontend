/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
// Temp sever calls go here.
import RNFetchBlob from 'react-native-fetch-blob';
import { User } from '../../models/User';
import { Quiz } from '../../models/Quiz';
import { Course } from '../../models/Course';
import { QuizSubmission } from '../../models/QuizSubmission';
import { AssignmentSubmission } from '../../models/AssignmentSubmission';
import { Assignment } from '../../models/Assignment';
import BackendClient from '../RevLearnBackendClient';

export const newStudent: User = {
  username: 'michael',
  password: '123',
  role: 'Student',
  id: '151515',
};

const newStudent2: User = {
  username: 'jon',
  password: '123',
  role: 'Student',
  id: '123',
};

const assignmentSubmission: AssignmentSubmission = {
  grade: 'A',
  attachment: ['1', '1'],
  submissionID: '2222',
  studentID: '123',
  submissionDate: new Date(Date.now()),
};
const assignmentSubmission1: AssignmentSubmission = {
  grade: 'A',
  attachment: ['1', '1'],
  submissionID: '22',
  studentID: '123',
  submissionDate: new Date(Date.now()),
};
const assignment: Assignment = {
  type: 'Homework',
  title: 'my assignment',
  submissions: [assignmentSubmission, assignmentSubmission1],
  passingGrade: 'A',
  ID: '112123',
  startDate: new Date(Date.now()),
  dueDate: new Date(Date.now()),
  description: 'discription',
};
const assignment1: Assignment = {
  type: 'Homework',
  title: 'my assignment 1',
  submissions: [assignmentSubmission, assignmentSubmission1],
  passingGrade: 'A',
  ID: '112123',
  startDate: new Date(Date.now()),
  dueDate: new Date(Date.now()),
  description: 'discription',
};
const newvar2: Course = {
  id: '1234',
  courseTitle: 'Computer Science',
  startDate: new Date(Date.now()).toDateString(),
  endDate: new Date(Date.now()).toDateString(),
  teacherID: 'ProfessorA',
  passingGrade: 'C',
  category: 'Software Engineering',
  students: [],
  activities: [
    assignment,
    assignment1,
  ],
  admissionRequests: [],
};

const newvar: Course = {
  id: '3412',
  courseTitle: 'Calculus',
  startDate: new Date(Date.now()).toDateString(),
  endDate: new Date(Date.now()).toDateString(),
  teacherID: 'ProfessorC',
  passingGrade: 'C',
  category: 'Mathematic',
  students: [],
  activities: [
    assignment,
    assignment1,
  ],
  admissionRequests: [],
};

export const courses: Array<Course> = [newvar, newvar2];

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

export function getAllUsers() {
  return BackendClient.get<User[]>('/user', {})
    .then((res) => { console.log('Successfully Found Users'); return res.data as User[]; })
    .catch((err) => { window.alert(err); return []; });
}

export function getByUserName() {
  return newStudent;
}

export function getUserByID(id: string): Promise<User> {
  return BackendClient.get<User>(`/user/${id}`)
    .then((res) => { console.log('Successfully Found User'); return res.data as User; })
    .catch((err) => { window.alert(err); throw new Error(err); });
}

export function deleteUser(id: string) {
  return BackendClient.delete(`/user/${id}`)
    .then(() => console.log('Successfully Deleted User'))
    .catch((err) => window.alert(err));
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
    submissionDate: new Date(),
    grade: 80,
  };

  return [submission];
}

/**
 * Sends create assignment request.
 * @param assignment Assignment
 */
export function CreateAssignment(assignment11: Assignment) {
  console.log(assignment11);
}

export function getCourseByID(id: string): Course {
  const student: User = {
    username: 'michael',
    password: '123',
    role: 'Student',
    id: '456',
  };

  return {
    id: '1234',
    courseTitle: 'Calculus',
    startDate: new Date(Date.now()).toDateString(),
    endDate: new Date(Date.now()).toDateString(),
    teacherID: 'ProfessorC',
    passingGrade: 'C',
    category: 'Mathematic',
    students: [],
    activities: [
      assignment,
      assignment1,
    ],
    admissionRequests: [student.id],
  };
}

export function getAllTeachers() {
  const teachers: User = {
    username: 'Brenda',
    password: '123',
    role: 'Teacher',
    id: '456',
  };
  const teachers2: User = {
    username: 'Donna',
    password: '123',
    role: 'Teacher',
    id: '123',
  };

  return [teachers, teachers2];
}

export const addUser = async (username: string, password: string, role: string, id: string) => {
  console.log(username, password, role, id);
  await BackendClient.post('/user', {
    username,
    password,
    role,
    id,
  }).then(() => console.log('Successfully Added User'))
    .catch((err) => window.alert(err));
};

// update password on settings page
export function updatePassword(password: string, userID: string) {
  console.log(password, userID);
}

export async function uploadFile(formData: FormData) {
  BackendClient.post('/upload', formData, /* , {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  } */)
    .then((res) => { console.log('successfull', res.data); })
    .catch((err) => window.alert(err));
}
