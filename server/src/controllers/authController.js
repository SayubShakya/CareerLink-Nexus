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
    createSendToken(newUser, 201, res, 'employer');
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

    // 3) Store user info in session
    req.session.userId = user.id;
    req.session.role = role;

    // 4) If everything ok, send token to client
    createSendToken(user, 200, res, role);
});

// 4. Logout
exports.logout = catchAsync(async (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            return next(new AppError('Could not log out. Please try again.', 500));
        }
        res.clearCookie('connect.sid'); // Default cookie name for express-session
        res.status(200).json({
            status: 'success',
            message: 'Logged out successfully'
        });
    });
});

// 5. Get current authenticated user
exports.getMe = catchAsync(async (req, res, next) => {
    // req.user and req.role are already populated by protect middleware
    res.status(200).json({
        status: 'success',
        data: {
            user: req.user,
            role: req.role
        }
    });
});
