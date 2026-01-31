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
