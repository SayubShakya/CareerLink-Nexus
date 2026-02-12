const express = require('express');
const cvController = require('../controllers/cvController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../utils/upload');

const router = express.Router();

// Protect all routes
router.use(authMiddleware.protect);
// Restrict to job seekers only
router.use(authMiddleware.restrictTo('job_seeker'));

router.route('/')
    .get(cvController.getAllCVs)
    .post(cvController.createPlatformCV);

router.post('/upload', upload.single('file'), cvController.uploadCV);

router.route('/:id')
    .delete(cvController.deleteCV)
    .get(cvController.downloadCV);

module.exports = router;
