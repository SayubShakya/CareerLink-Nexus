const JobSeeker = require('../models/JobSeeker');
const Employer = require('../models/Employer');
const Role = require('../models/Role');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { createSendToken } = require('../utils/auth');

// Register Role Helpers
async function getRoleByName(name) {
    return await Role.findOne({ where: { name } });
}

// 1. Register Job Seeker
exports.registerJobSeeker = catchAsync(async (req, res, next) => {
    const { first_name, last_name, email, password } = req.body;

    // Get Role ID
    const role = await getRoleByName('job_seeker');
    if (!role) return next(new AppError('Job Seeker role not found. Run sync.', 500));

    // Create User
    const newUser = await JobSeeker.create({
        first_name,
        last_name,
        email,
        password_hash: password, // Will be hashed by hook
        role_id: role.id
    });

    createSendToken(newUser, 201, res, 'job_seeker');
});

// 2. Register Employer
exports.registerEmployer = catchAsync(async (req, res, next) => {
    const { organization_name, company_website, email, password } = req.body;

    // Get Role ID
    const role = await getRoleByName('employeer');
    if (!role) return next(new AppError('Employer role not found. Run sync.', 500));

    // Create User
    const newUser = await Employer.create({
        organization_name,
        company_website,
        email,
        password_hash: password, // Will be hashed by hook
        role_id: role.id
    });

    createSendToken(newUser, 201, res, 'employeer');
});

// 3. Login (Unified or Separate? Let's try searching both for now to be user-friendly, or strictly separated)
// Given schema separation, usually login endpoints are separated or a "role" param is passed.
// I will implement a unified login that checks email in both tables if role not provided, or specific if provided.
// To keep it simple and RESTful: POST /api/auth/login
// 3. Login
exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }

    // Check JobSeeker
    const jobSeeker = await JobSeeker.findOne({ where: { email } });
    if (jobSeeker) {
        if (!(await jobSeeker.correctPassword(password, jobSeeker.password_hash))) {
            return next(new AppError('Incorrect email or password', 401));
        }
        return createSendToken(jobSeeker, 200, res, 'job_seeker');
    }

    // Check Employer
    const employer = await Employer.findOne({ where: { email } });
    if (employer) {
        if (!(await employer.correctPassword(password, employer.password_hash))) {
            return next(new AppError('Incorrect email or password', 401));
        }
        return createSendToken(employer, 200, res, 'employeer');
    }

    // Not found
    return next(new AppError('Incorrect email or password', 401));
});
