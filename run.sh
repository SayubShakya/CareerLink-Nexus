#!/bin/bash

# Function to kill existing processes on ports 3000 and 5000
cleanup_ports() {
    echo "🧹 Cleaning up existing processes on ports 3000 and 5000..."
    
    # Port 3000 (Frontend)
    PID_3000=$(lsof -t -i:3000)
    if [ ! -z "$PID_3000" ]; then
        echo "Killing process $PID_3000 on port 3000"
        kill -9 $PID_3000 2>/dev/null
    fi

    # Port 5000 (Backend)
    PID_5000=$(lsof -t -i:5000)
    if [ ! -z "$PID_5000" ]; then
        echo "Killing process $PID_5000 on port 5000"
        kill -9 $PID_5000 2>/dev/null
    fi
}

# Function to be called on script exit
on_exit() {
    echo ""
    echo "🛑 Shutting down servers..."
    # Kill all background processes started by this script
    jobs -p | xargs -r kill
    echo "👋 Goodbye!"
    exit
}

# Trap SIGINT (Ctrl+C) and SIGTERM
trap on_exit SIGINT SIGTERM EXIT

# Initial cleanup
cleanup_ports

echo "🚀 Starting CareerLink Hub..."

# Check if node_modules exist to avoid unnecessary npm installs every time
if [ ! -d "server/node_modules" ]; then
    echo "📦 Installing Backend Dependencies..."
    (cd server && npm install)
fi

if [ ! -d "client/node_modules" ]; then
    echo "📦 Installing Frontend Dependencies..."
    (cd client && npm install)
fi

echo "✅ Ready to launch!"
echo "🏃 Starting Servers... (Press Ctrl+C to stop everything)"

# Start both in background
(cd server && npm start) &
(cd client && npm run dev) &

# Wait for background processes
wait
