/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import { Course } from '../../models/Course';
import { User } from '../../models/User';
import BackendClient from '../RevLearnBackendClient';

// eslint-disable-next-line arrow-body-style
export const getAllCourses = async (): Promise<Course[]> => {
  return BackendClient.get<Course[]>('/course', {})
    .then((res) => { console.log('Successfully Found Courses'); return res.data as Course[]; })
    .catch((err) => { window.alert(err); return []; });
};

export const getStudentCourses = async (user: User): Promise<Course[]> => {
  return BackendClient.get<Course[]>(`/course/student/${user.userID}`, {})
    .then((res) => { console.log('Successfully Found Courses'); return res.data as Course[]; })
    .catch((err) => { window.alert(err); return []; });
};

export const getTeacherCourses = async (user: User): Promise<Course[]> => {
  return BackendClient.get<Course[]>(`/course/teacher/${user.userID}`, {})
    .then((res) => { console.log('Successfully Found Courses'); return res.data as Course[]; })
    .catch((err) => { window.alert(err); return []; });
};
