const Application = require('../models/Application');
const CV = require('../models/CV');
const JobSeeker = require('../models/JobSeeker');

exports.applyForJob = async (req, res) => {
    try {
        const { id: jobId } = req.params; // Job ID from URL
        const { cvId } = req.body; // CV ID from request body
        const seekerId = req.user.id; // From auth middleware

        if (!cvId) {
            return res.status(400).json({ success: false, message: 'CV is required' });
        }

        // Validate CV ownership
        const cv = await CV.findOne({ where: { id: cvId, user_id: seekerId } });
        if (!cv) {
            return res.status(404).json({ success: false, message: 'CV not found or unauthorized' });
        }

        // Check if already applied
        const existingApplication = await Application.findOne({
            where: { job_id: jobId, seeker_id: seekerId }
        });

        if (existingApplication) {
            return res.status(409).json({ success: false, message: 'You have already applied for this job' });
        }

        // Create Application
        const application = await Application.create({
            job_id: jobId,
            seeker_id: seekerId,
            cv_id: cvId,
            status: 'pending'
        });

        res.status(201).json({
            success: true,
            message: 'Application submitted successfully',
            data: { application }
        });

    } catch (error) {
        console.error('Error applying for job:', error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

exports.getApplicationsByJob = async (req, res) => {
    try {
        const { id: jobId } = req.params;

        // Fetch applications with JobSeeker and CV details
        const applications = await Application.findAll({
            where: { job_id: jobId },
            include: [
                { model: JobSeeker, attributes: ['first_name', 'last_name', 'email', 'phone'] },
                { model: CV, attributes: ['title', 'file_path', 'type'] }
            ],
            order: [['applied_at', 'DESC']]
        });

        res.status(200).json({
            success: true,
            data: { applications }
        });

    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

exports.getAllApplications = async (req, res) => {
    try {
        // Fetch all applications (for Employer Dashboard overview)
        // In a real app, filtering by employer's jobs is needed.
        // For now, return all since we use mock jobs.
        const applications = await Application.findAll({
            include: [
                { model: JobSeeker, attributes: ['first_name', 'last_name', 'email'] },
                { model: CV, attributes: ['title', 'file_path', 'type'] }
            ],
            order: [['applied_at', 'DESC']]
        });

        res.status(200).json({
            success: true,
            data: { applications }
        });
    } catch (error) {
        console.error('Error fetching all applications:', error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};
