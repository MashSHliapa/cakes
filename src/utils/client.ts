import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:8099',
  timeout: 3000,
});
