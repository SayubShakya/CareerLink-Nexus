const Role = require('../models/Role');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

// Get all roles
exports.getAllRoles = catchAsync(async (req, res, next) => {
    const roles = await Role.findAll();

    res.status(200).json({
        status: 'success',
        results: roles.length,
        data: { roles }
    });
});

// Create a new role
exports.createRole = catchAsync(async (req, res, next) => {
    const { name } = req.body;
    const newRole = await Role.create({ name });

    res.status(201).json({
        status: 'success',
        data: { role: newRole }
    });
});

// Get a single role
exports.getRole = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const role = await Role.findByPk(id);

    if (!role) {
        return next(new AppError('No role found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: { role }
    });
});

// Update a role
exports.updateRole = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;

    const role = await Role.findByPk(id);

    if (!role) {
        return next(new AppError('No role found with that ID', 404));
    }

    role.name = name;
    await role.save();

    res.status(200).json({
        status: 'success',
        data: { role }
    });
});

// Delete a role
exports.deleteRole = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const role = await Role.findByPk(id);

    if (!role) {
        return next(new AppError('No role found with that ID', 404));
    }

    await role.destroy();

    res.status(204).json({
        status: 'success',
        data: null
    });
});
