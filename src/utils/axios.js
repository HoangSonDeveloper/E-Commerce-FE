import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.learnbox.live',
  // baseURL: 'http://localhost:5001',
  timeout: 60000,
});

// Add a request interceptor
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    const request = config;

    if (token) {
      request.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  error => Promise.reject(error),
);

// Add a response interceptor
api.interceptors.response.use(
  response => {
    // Return JSON data
    if (response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    // Attempt to get the actual error returned from API
    const err = error.response || error;

    return Promise.reject(err.data); // Propagate rejection back to caller
  },
);

export default api;
