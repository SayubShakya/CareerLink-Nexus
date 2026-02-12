import api from './api';

class CVService {
    async getAllCVs() {
        const response = await api.get('/cvs');
        return response.data.data.cvs;
    }

    async createPlatformCV(data) {
        const response = await api.post('/cvs', data);
        return response.data.data.cv;
    }

    async deleteCV(id) {
        await api.delete(`/cvs/${id}`);
    }

    // This would be for uploaded files
    async uploadCV(formData) {
        const response = await api.post('/cvs/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data.data.cv;
    }

    async updateCV(id, data) {
        const response = await api.patch(`/cvs/${id}`, data);
        return response.data.data.cv;
    }

    downloadUrl(id) {
        const token = localStorage.getItem('token');
        return `/api/cvs/${id}?token=${token}`; // Simplified download approach
    }
}

export default new CVService();
