import { client } from '../utils/client';
import { cakesEndpoint } from '../api';

export const requestCakes = async () => {
  const { data } = await client.get(cakesEndpoint);
  return data;
};
