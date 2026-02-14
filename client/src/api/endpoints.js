export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER_JOB_SEEKER: '/auth/register/job-seeker',
        REGISTER_EMPLOYER: '/auth/register/employer',
        LOGOUT: '/auth/logout',
        ME: '/auth/me',
    },
    JOBS: {
        LIST: '/jobs',
        DETAILS: (id) => `/jobs/${id}`,
        APPLY: (id) => `/jobs/${id}/apply`,
    },
    CV: {
        LIST: '/cvs',
        UPLOAD: '/cvs/upload',
        DETAILS: (id) => `/cvs/${id}`,
        UPDATE: (id) => `/cvs/${id}`,
        DELETE: (id) => `/cvs/${id}`,
    },
    PROFILE: {
        GET: '/job-seekers/me',
        UPDATE: '/job-seekers/me',
    },
    EMPLOYER: {
        APPLICATIONS: '/employers/applications',
    },
};
