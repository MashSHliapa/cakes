import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:3011',
  timeout: 3000,
});
