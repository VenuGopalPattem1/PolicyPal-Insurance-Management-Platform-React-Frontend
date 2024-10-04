// src/services/axiosInstance.js

import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'http://venugopal:9091', // API base URL
});

// Request Interceptor to Attach Token to Requests
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Get token from localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Set Authorization header
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Optional: Response Interceptor for Error Handling (e.g., token expiry)
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            // Token expired or user unauthorized - redirect to login or handle token refresh
            localStorage.removeItem('token'); // Optional: Remove token
            window.location.href = '/login'; // Redirect to login page
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
