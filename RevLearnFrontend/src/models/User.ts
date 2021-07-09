import { Role } from '../Types/MyTypes';

/**
 * Represents the data of a user
 * @property username: string
 * @property password: string
 * @property courses: []
 * @property role: string
 * @property userID: string
 */
export interface User{
  username: string,
  password: string,
  courses: [],
  role: Role,
  userID: string,
}
