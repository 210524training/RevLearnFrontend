// Temp sever calls go here.
import User from '../models/User';
import Quiz from '../models/Quiz';

const newStudent: User = {
  username: 'michael',
  password: '123',
  courses: [],
  role: 'Student',
  userID: '456',
};

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
