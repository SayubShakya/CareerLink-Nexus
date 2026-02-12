import api from './api';

class JobSeekerService {
    async getProfile() {
        const response = await api.get('/job-seekers/me');
        return response.data.data.user;
    }

    async updateProfile(userData) {
        const response = await api.patch('/job-seekers/me', userData);
        return response.data.data.user;
    }
}

export default new JobSeekerService();
