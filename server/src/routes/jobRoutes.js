const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');

// Job Routes - Assumes routes are mounted under /api/jobs

// Seeker applies to a job
router.post('/:id/apply', protect, applicationController.applyForJob);

// Employer views applicants for a job
router.get('/:id/applicants', protect, applicationController.getApplicationsByJob);

module.exports = router;
