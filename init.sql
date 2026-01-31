
-- Create Database (Run this manually if script doesn't have permissions to create DBs)
-- CREATE DATABASE careerlink;

-- Check if we can connect and create a simple table to verify
CREATE TABLE IF NOT EXISTS system_status (
    id SERIAL PRIMARY KEY,
    status_text VARCHAR(50),
    checked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO system_status (status_text) VALUES ('Database Initialized');
