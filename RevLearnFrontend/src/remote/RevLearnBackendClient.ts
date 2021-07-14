import axios from 'axios';

const BackendClient = axios.create({
  baseURL: 'https://wtlxcvaysb.execute-api.us-west-2.amazonaws.com/dev',
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
