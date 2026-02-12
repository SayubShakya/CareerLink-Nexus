const authService = require('../services/authService');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { createSendToken } = require('../utils/auth');

// 1. Register Job Seeker
exports.registerJobSeeker = catchAsync(async (req, res, next) => {
    const newUser = await authService.createJobSeeker(req.body);
    createSendToken(newUser, 201, res, 'job_seeker');
});

// 2. Register Employer
exports.registerEmployer = catchAsync(async (req, res, next) => {
    const newUser = await authService.createEmployer(req.body);
    createSendToken(newUser, 201, res, 'employeer');
});

// 3. Login
exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }

    // 1) Check if user exists
    const result = await authService.findUserByEmail(email);
    if (!result) {
        return next(new AppError('Incorrect email or password', 401));
    }

    const { user, role } = result;

    // 2) Check if password is correct
    const isCorrect = await authService.verifyPassword(user, password);
    if (!isCorrect) {
        return next(new AppError('Incorrect email or password', 401));
    }

    // 3) If everything ok, send token to client
    createSendToken(user, 200, res, role);
});
