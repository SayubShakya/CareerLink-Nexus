
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
    res.json({
        status: "OK",
        timestamp: new Date().toISOString(),
        service: "CareerLink API"
    });
});

// Database Connection Test (Optional log on start)
// In a real app we might check this in /health too, but keeping it simple for now.

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
