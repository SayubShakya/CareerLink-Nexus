#!/bin/bash
echo "🚀 Starting CareerLink Setup..."

# Install Backend Dependencies
echo "📦 Installing Backend Dependencies..."
cd server
npm install
cd ..

# Install Frontend Dependencies
echo "📦 Installing Frontend Dependencies..."
cd client
npm install
cd ..

echo "✅ Setup Complete!"
echo "🏃 Starting Servers (Use Ctrl+C to stop)..."

# Use concurrently if available, or just run in background
# Ideally we would use 'concurrently' package here for better DX, but using simple backgrounding for 'skeleton'
(cd server && npm start) & (cd client && npm run dev)
