const express = require('express');
const cors = require('cors');
const healthRoutes = require('./routes/healthRoutes');
const roleRoutes = require('./routes/roleRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');
const AppError = require('./utils/AppError');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');

const app = express();

// Global Middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/auth', authRoutes);

// Handle Undefined Routes
app.all(/(.*)/, (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;
