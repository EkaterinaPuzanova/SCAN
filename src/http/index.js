import axios from 'axios';

export const API_URL = `https://gateway.scan-interfax.ru/api`;

const api = axios.create({
  // withCredentials: true,
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': true
  }
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
})

export default api;