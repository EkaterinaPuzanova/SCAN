import axios from 'axios';

export const API_URL = `https://gateway.scan-interfax.ru/api`;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(`token${localStorage.getItem('account')}`)}`;

  return config;
})

export default api;