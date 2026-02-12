const Employer = require('../models/Employer');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

// Get current employer profile
exports.getMe = catchAsync(async (req, res, next) => {
    // req.user is already populated by protect middleware
    const user = await Employer.findByPk(req.user.id, {
        attributes: { exclude: ['password_hash'] }
    });

    if (!user) {
        return next(new AppError('Employer not found', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
});

// Update current employer profile
exports.updateMe = catchAsync(async (req, res, next) => {
    // 1) Create error if user POSTs password data
    if (req.body.password || req.body.passwordConfirm) {
        return next(
            new AppError(
                'This route is not for password updates. Please use /updateMyPassword.',
                400
            )
        );
    }

    // 2) Filtered out unwanted fields
    const allowedFields = ['organization_name', 'industry', 'company_website', 'contact_person', 'company_description', 'city', 'state', 'zip_code', 'country'];

    const filteredBody = {};
    Object.keys(req.body).forEach(el => {
        if (allowedFields.includes(el)) filteredBody[el] = req.body[el];
    });

    // 3) Update user document
    const [updatedRows] = await Employer.update(filteredBody, {
        where: { id: req.user.id }
    });

    const updatedUser = await Employer.findByPk(req.user.id, {
        attributes: { exclude: ['password_hash'] }
    });

    res.status(200).json({
        status: 'success',
        data: {
            user: updatedUser
        }
    });
});
