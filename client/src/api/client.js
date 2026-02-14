import axios from 'axios';
import { API_BASE_URL, STORAGE_KEYS } from '@/config/constants';
import { API_ENDPOINTS } from './endpoints';

// Create axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Check if we are not already on the login page to avoid loops
            if (!window.location.pathname.includes('/login')) {
                localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
                localStorage.removeItem(STORAGE_KEYS.USER_DATA);
                // Optional: Redirect to login or dispatch an event
                // window.location.href = '/login'; 
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;
