/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import { Course } from '../../models/Course';
import { User } from '../../models/User';
import BackendClient from '../RevLearnBackendClient';

export const getAllCourses = async (): Promise<Course[]> => {
  return BackendClient.get<Course[]>('/course')
    .then((res) => { console.log('Successfully Found Courses'); return res.data as Course[]; })
    .catch((err) => { window.alert('Error retriving courses: '); console.log('Error retriving courses: ', err); return []; });
};

export const getStudentCourses = async (id: string): Promise<Course[]> => {
  return BackendClient.get<Course[]>(`/course/student/${id}`)
    .then((res) => { console.log('Successfully Found Courses'); return res.data as Course[]; })
    .catch((err) => { window.alert(err); return []; });
};

export const getTeacherCourses = async (user: User): Promise<Course[]> => {
  return BackendClient.get<Course[]>(`/course/teacher/${user.id}`)
    .then((res) => { console.log('Successfully Found Courses', res.data); return res.data as Course[]; })
    .catch((err) => { window.alert(err); return []; });
};

export const createNewCourse = async (course: Course): Promise<void> => {
  return BackendClient.post('/course', course)
    .then((res) => window.alert('Successfully created course'))
    .catch((err) => console.log('Error attempting to add course. ', err));
};

export const updateCourse = async (course: Course): Promise<void> => {
  return BackendClient.put('/course', course)
    .then((res) => window.alert('Successfully updated course'))
    .catch((err) => console.log('Error attempting to update course. ', err));
};
