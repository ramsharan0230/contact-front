// src/axios.js
import axios from 'axios';

const createAxiosInstance = () => {
  const apiUrl = "http://127.0.0.1:8000/api/v1/";

  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance; // Export the function
