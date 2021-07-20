/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
// Temp sever calls go here.
import * as AWS from 'aws-sdk';
import { REVLEARN_USER_KEY, REVLEARN_USER_SECRET } from 'react-native-dotenv';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
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

// update password on settings page
export function updatePassword(password: string, userID: string) {
  console.log(password, userID);
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

export function getAllUsers() {
  return BackendClient.get<User[]>('/user')
    .then((res) => { console.log('Successfully Found Users'); return res.data as User[]; })
    .catch((err) => { window.alert(err); return []; });
}

export function getAllTeachers() {
  return BackendClient.get<User[]>('/user/teacher')
    .then((res) => { console.log('Successfully Found Teachers'); return res.data as User[]; })
    .catch((err) => { window.alert(err); return []; });
}

export async function getUserByID(id: string) {
  return BackendClient.get<User>(`/user/${id}`)
    .then((res) => { console.log('Successfully Found User'); return res.data as User; })
    .catch((err) => { window.alert(err); });
}

export function deleteUser(id: string) {
  return BackendClient.delete(`/user/${id}`)
    .then(() => console.log('Successfully Deleted User'))
    .catch((err) => window.alert(err));
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

export async function uploadFile(objectName: any, objectData: any) {
  console.log('recived: ', objectName);
  console.log('user key: ', REVLEARN_USER_KEY);
  console.log('secret: ', REVLEARN_USER_SECRET);
  const BUCKETNAME: string = 'p2-rev-learn-assets';
  const userKey = REVLEARN_USER_KEY;
  const secret = REVLEARN_USER_SECRET;

  console.log({
    apiVersion: 'latest',
    accessKeyId: userKey,
    secretAccessKey: secret,
  });
  AWS.config.update({ region: 'us-west-2' });
  const s3bucket = new AWS.S3({
    apiVersion: 'latest',
    accessKeyId: userKey,
    secretAccessKey: secret,
  });
  const key = `Assets/${uuid()}${objectName}`;

  const params: AWS.S3.PutObjectRequest = {
    Bucket: BUCKETNAME,
    Key: key,
    Body: objectData,
  };
  console.log('Sending request');
  s3bucket.upload(params, (err, data) => console.log(err || data));
  return key;
}

export async function getFileUrl(key: string): Promise<string> {
  const BUCKETNAME: string = 'p2-rev-learn-assets';

  AWS.config.update({ region: 'us-west-2' });
  const s3bucket = new AWS.S3({
    apiVersion: 'latest',
    accessKeyId: REVLEARN_USER_KEY,
    secretAccessKey: REVLEARN_USER_SECRET,
  });
  console.log('Sending retrive request');
  const params = { Bucket: 'p2-rev-learn-assets', Key: key };
  return s3bucket.getSignedUrl('getObject', params);
}

export async function downLoadFile(url: string) {
  const s3Client = axios.create({
    baseURL: url,
  });
  s3Client.get('')
    .then((res) => { console.log('successfull', res.data); })
    .catch((err) => window.alert(err));
}
