const roleService = require('../services/roleService');
const catchAsync = require('../utils/catchAsync');

// Get all roles
exports.getAllRoles = catchAsync(async (req, res, next) => {
    const roles = await roleService.findAll();

    res.status(200).json({
        status: 'success',
        results: roles.length,
        data: { roles }
    });
});

// Create a new role
exports.createRole = catchAsync(async (req, res, next) => {
    const newRole = await roleService.create(req.body);

    res.status(201).json({
        status: 'success',
        data: { role: newRole }
    });
});

// Get a single role
exports.getRole = catchAsync(async (req, res, next) => {
    const role = await roleService.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: { role }
    });
});

// Update a role
exports.updateRole = catchAsync(async (req, res, next) => {
    const role = await roleService.update(req.params.id, req.body);

    res.status(200).json({
        status: 'success',
        data: { role }
    });
});

// Delete a role
exports.deleteRole = catchAsync(async (req, res, next) => {
    await roleService.delete(req.params.id);

    res.status(204).json({
        status: 'success',
        data: null
    });
});
