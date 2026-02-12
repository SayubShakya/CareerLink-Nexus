import api from './api';

/**
 * Single Responsibility: Manage Authentication API calls and related local storage state.
 */
class AuthService {
    /**
     * Unified login for both Job Seekers and Employers
     */
    async login(email, password) {
        const response = await api.post('/auth/login', { email, password });
        if (response.data.token) {
            this._setSession(response.data.token, response.data.data.user, response.data.data.role);
        }
        return response.data;
    }

    /**
     * Register a new Job Seeker
     */
    async registerJobSeeker(userData) {
        // Map frontend fields (firstName/lastName) to backend fields (first_name/last_name)
        const payload = {
            first_name: userData.firstName,
            last_name: userData.lastName,
            email: userData.email,
            password: userData.password
        };

        const response = await api.post('/auth/register/job-seeker', payload);
        // We no longer auto-login after registration as per user request
        /*
        if (response.data.token) {
            this._setSession(response.data.token, response.data.data.user, response.data.data.role);
        }
        */
        return response.data;
    }

    /**
     * Register a new Employer
     */
    async registerEmployer(userData) {
        // Map frontend fields to backend fields
        const payload = {
            organization_name: userData.companyName,
            company_website: this._ensureProtocol(userData.companyWebsite),
            email: userData.email,
            password: userData.password
        };

        const response = await api.post('/auth/register/employer', payload);
        // We no longer auto-login after registration as per user request
        /*
        if (response.data.token) {
            this._setSession(response.data.token, response.data.data.user, response.data.data.role);
        }
        */
        return response.data;
    }

    /**
     * Clear session data
     */
    async logout() {
        try {
            await api.post('/auth/logout');
        } catch (err) {
            console.error('Logout error:', err);
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('role');
        }
    }

    async fetchCurrentUser() {
        try {
            const response = await api.get('/auth/me');
            const user = response.data.data.user;
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch (err) {
            console.error('Error fetching current user:', err);
            throw err;
        }
    }

    /**
     * Get current user from storage
     */
    getCurrentUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    /**
     * Check if user is authenticated
     */
    isAuthenticated() {
        return !!localStorage.getItem('token');
    }

    /**
     * Manually update the user in local storage
     */
    updateLocalStorageUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    /**
     * Helper to set session data
     */
    _setSession(token, user, role) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('role', role);
    }

    /**
     * Helper to ensure URL has protocol
     */
    _ensureProtocol(url) {
        if (!url) return url;
        if (!/^https?:\/\//i.test(url)) {
            return 'https://' + url;
        }
        return url;
    }
}

export default new AuthService();
