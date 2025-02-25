import { client } from '../utils/client';
import { cakesEndpoint, fillingsEndpoint } from '../api';

export const requestCakes = async () => {
  const { data } = await client.get(cakesEndpoint);
  return data;
};

export const requestFillings = async () => {
  const { data } = await client.get(fillingsEndpoint);
  return data;
};
