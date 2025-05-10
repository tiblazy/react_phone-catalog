/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const BASE_URL = '/api/products.json';

export const apiProducts = axios.create({
  baseURL: BASE_URL,
});
