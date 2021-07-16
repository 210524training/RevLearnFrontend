import axios from 'axios';

const BackendClient = axios.create({
  baseURL: 'https://z2egh05e5m.execute-api.us-west-2.amazonaws.com/dev',
  /* headers: {
    'Content-Type': 'multipart/form-data',
  },
  withCredentials: false, */
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export default BackendClient;
