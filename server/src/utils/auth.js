const jwt = require('jsonwebtoken');

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '90d'
    });
};

const createSendToken = (user, statusCode, res, role) => {
    const token = signToken(user.id);

    // Remove password from output
    user.password_hash = undefined;

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
            role
        }
    });
};

module.exports = { signToken, createSendToken };
