
exports.getHealth = (req, res, next) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        service: 'CareerLink API',
        uptime: process.uptime()
    });
};
