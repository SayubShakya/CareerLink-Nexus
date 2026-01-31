
const { Pool } = require('pg');
require('dotenv').config();

// Create connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    // If we were using Neon, we'd use connectionString here.
    // The logic below supports both local and potential connection string in future.
    ...(process.env.DATABASE_URL && { connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } })
});

// Test connection on startup
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('⚠️  Database not connected (Running in offline mode)');
    } else {
        console.log('✅ Database connected successfully');
    }
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool, // Exporting pool directly if needed for transactions
};
