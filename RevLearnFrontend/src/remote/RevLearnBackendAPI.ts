// Temp sever calls go here.

import Quiz from "../models/Quiz";
import User from "../models/user";

/**
 * 
 * @param input string
 */
function test55(input: string) {

}


/**
 * Send a new quiz to the back-end
 * @param quiz the quiz object
 */
export function createQuiz(quiz: Quiz) {
  
}
/**
 * 
 * @param username 
 * @param password 
 * @returns User: username, password
 */

export const sendLogin = async (username: string, password: string): Promise<User> => {
    console.log(username, password);
  
    const { data: user } = await revLearnClient.post<User>('/login', {
      username,
      password,
    });
  
    console.log(user);
    return user;
  }
