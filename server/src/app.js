
const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); // If installed, otherwise skip
const healthRoutes = require('./routes/healthRoutes');
const errorHandler = require('./middleware/errorHandler');
const AppError = require('./utils/AppError');

const app = express();

// 1) Middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

// 2) Routes
app.use('/api/health', healthRoutes);

// Handle Undefined Routes
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// 3) Global Error Handler
app.use(errorHandler);

module.exports = app;
