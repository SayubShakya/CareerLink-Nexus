import api from '@/api/client';
import { API_ENDPOINTS } from '@/api/endpoints';

class ApplicationService {
    async applyForJob(jobId, cvId) {
        const url = API_ENDPOINTS.JOBS.APPLY(jobId);
        const response = await api.post(url, { cvId });
        return response.data;
    }

    async getAllApplications() {
        const response = await api.get(API_ENDPOINTS.EMPLOYER.APPLICATIONS);
        return response.data.data.applications;
    }
}

export default new ApplicationService();
