
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState('Checking connectivity...');
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await axios.get('/api/health');
        if (response.data.status === 'OK') {
          setStatus('Online');
          setTimestamp(response.data.timestamp);
        } else {
          setStatus('Backend Error');
        }
      } catch (error) {
        setStatus('Offline (Cannot connect to server)');
        console.error("Health check failed:", error);
      }
    };

    fetchHealth();
  }, []);

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
      color: '#1c1e21'
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: '0 0 1rem 0', color: '#1877f2' }}>CareerLink: Job Portal</h1>
        <div style={{
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          justifyContent: 'center'
        }}>
          <span>System Status:</span>
          <span style={{
            fontWeight: 'bold',
            color: status === 'Online' ? '#42b72a' : '#fa3e3e'
          }}>
            {status}
          </span>
        </div>
        {timestamp && (
          <p style={{ marginTop: '1rem', color: '#65676b', fontSize: '0.9rem' }}>
            Server Time: {new Date(timestamp).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
