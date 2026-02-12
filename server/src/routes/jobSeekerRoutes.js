const express = require('express');
const jobSeekerController = require('../controllers/jobSeekerController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get current logged-in user
// Protect all routes after this middleware
router.use(authMiddleware.protect);

// Routes specific to job seeker
router.get('/me', jobSeekerController.getMe);
router.patch('/me', jobSeekerController.updateMe);

module.exports = router;
