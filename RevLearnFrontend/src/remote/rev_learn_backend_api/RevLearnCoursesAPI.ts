/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import { Course } from '../../models/Course';
import BackendClient from '../RevLearnBackendClient';

// eslint-disable-next-line arrow-body-style
export const getAllCourses = async (): Promise<Course[]> => {
  return BackendClient.get<Course[]>('/course', {})
    .then((res) => { console.log('Successfully Found Courses'); return res.data as Course[]; })
    .catch((err) => { window.alert(err); return []; });
};
