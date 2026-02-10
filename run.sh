#!/bin/bash

# Function to kill existing processes on ports 3000 and 5000
cleanup_ports() {
    echo "🧹 Cleaning up existing processes on ports 3000 and 5000..."
    
    # Check OS
    if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
        # Windows
        for port in 3000 5000; do
            PID=$(netstat -ano | grep ":$port" | grep "LISTENING" | awk '{print $5}' | head -n 1)
            if [ ! -z "$PID" ]; then
                echo "Killing process $PID on port $port"
                taskkill -F -PID $PID 2>/dev/null
            fi
        done
    else
        # Linux / macOS
        for port in 3000 5000; do
            PID=$(lsof -t -i:$port)
            if [ ! -z "$PID" ]; then
                echo "Killing process $PID on port $port"
                kill -9 $PID 2>/dev/null
            fi
        done
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

# Auto-install dependencies
echo "📦 Checking/Installing Backend Dependencies..."
(cd server && npm install --no-fund --no-audit)

echo "📦 Checking/Installing Frontend Dependencies..."
(cd client && npm install --no-fund --no-audit)

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies. Please check your internet connection."
    exit 1
fi

echo "✅ Dependencies verified!"
echo "🏃 Starting Servers... (Press Ctrl+C to stop everything)"

# Start both in background
(cd server && npm start) &
(cd client && npm run dev) &

# Wait for background processes
wait
