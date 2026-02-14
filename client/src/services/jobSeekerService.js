import api from '@/api/client';
import { API_ENDPOINTS } from '@/api/endpoints';

class JobSeekerService {
    async getProfile() {
        const response = await api.get(API_ENDPOINTS.PROFILE.GET);
        return response.data.data.user;
    }

    async updateProfile(userData) {
        const response = await api.patch(API_ENDPOINTS.PROFILE.UPDATE, userData);
        return response.data.data.user;
    }
}

export default new JobSeekerService();
