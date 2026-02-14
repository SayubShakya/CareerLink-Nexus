const express = require('express');
const employerController = require('../controllers/employerController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Protect all routes after this middleware
router.use(authMiddleware.protect);
// Restrict to only employers
router.use(authMiddleware.restrictTo('employer'));

const applicationController = require('../controllers/applicationController'); // New Import

// Routes specific to employer
router.get('/me', employerController.getMe);
router.patch('/me', employerController.updateMe);
router.get('/applications', applicationController.getAllApplications); // View applications for dashboard

module.exports = router;
