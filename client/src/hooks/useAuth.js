import { useState, useCallback } from 'react';
import authService from '@/services/authService';
import { STORAGE_KEYS } from '@/config/constants';

/**
 * Custom hook for authentication logic
 * Wraps the authService methods and provides reactive state if needed in future
 */
export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = useCallback(async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const data = await authService.login(email, password);
            return data;
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(async () => {
        setLoading(true);
        try {
            await authService.logout();
        } catch (err) {
            console.error("Logout error", err);
        } finally {
            setLoading(false);
            localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
            localStorage.removeItem(STORAGE_KEYS.USER_DATA);
        }
    }, []);

    const registerJobSeeker = useCallback(async (userData) => {
        setLoading(true);
        setError(null);
        try {
            return await authService.registerJobSeeker(userData);
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const registerEmployer = useCallback(async (userData) => {
        setLoading(true);
        setError(null);
        try {
            return await authService.registerEmployer(userData);
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getCurrentUser = useCallback(() => {
        return authService.getCurrentUser();
    }, []);

    const isAuthenticated = useCallback(() => {
        return authService.isAuthenticated();
    }, []);

    return {
        login,
        logout,
        registerJobSeeker,
        registerEmployer,
        getCurrentUser,
        isAuthenticated,
        loading,
        error
    };
};

export default useAuth;
