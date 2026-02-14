
import api from '@/api/client';
import { STORAGE_KEYS } from '@/config/constants';
import { API_ENDPOINTS } from '@/api/endpoints';

class CVService {
    async getAllCVs() {
        const response = await api.get(API_ENDPOINTS.CV.LIST);
        return response.data.data.cvs;
    }

    async createPlatformCV(data) {
        const response = await api.post(API_ENDPOINTS.CV.LIST, data);
        return response.data.data.cv;
    }

    async deleteCV(id) {
        await api.delete(API_ENDPOINTS.CV.DELETE(id));
    }

    // This would be for uploaded files
    async uploadCV(formData) {
        const response = await api.post(API_ENDPOINTS.CV.UPLOAD, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data.data.cv;
    }

    async updateCV(id, data) {
        const response = await api.patch(API_ENDPOINTS.CV.UPDATE(id), data);
        return response.data.data.cv;
    }

    downloadUrl(id) {
        const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
        return `/api/cvs/${id}?token=${token}`; // Simplified download approach
    }
}

export default new CVService();
