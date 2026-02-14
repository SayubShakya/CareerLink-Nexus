
const app = require('./src/app');
require('dotenv').config();
require('./src/config/db'); // Initialize DB pool

const syncDatabase = require('./src/sync'); // Database Sync

const PORT = process.env.PORT || 5000;
let server;

// Sync DB then start server
syncDatabase().then(() => {
    server = app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

// Graceful shutdown on SIGTERM (e.g., from Heroku/Docker)
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
        console.log('💥 Process terminated!');
    });
});

// Graceful shutdown on SIGINT (Ctrl+C)
process.on('SIGINT', () => {
    console.log('👋 SIGINT RECEIVED. Shutting down gracefully');
    server.close(() => {
        console.log('💥 Process terminated!');
        process.exit(0);
    });
});
