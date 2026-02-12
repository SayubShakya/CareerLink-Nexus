const jwt = require('jsonwebtoken');

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '90d'
    });
};

const createSendToken = (user, statusCode, res, role) => {
    const token = signToken(user.id);

    // Convert to plain object and remove sensitive data
    const userData = user.toJSON();
    delete userData.password_hash;

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user: userData,
            role
        }
    });
};

module.exports = { signToken, createSendToken };
