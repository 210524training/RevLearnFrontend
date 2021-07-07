import User from "../models/User"



const newStudent: User = {
  username: 'michael',
  password: '123',
  courses: [],
  role: "student",
  userID: "456",
}

// Temp sever calls go here.
/**
 * 
 * @param input string
 */
function test55(input: string) {

}
/**
 * 
 * @callAStudent to use as a placeholder in replace of the original grubdashClient method in RegisterPage.
 */
export function registerStudent(){
  return true
};

export function getByUserName(){
  return newStudent
}

