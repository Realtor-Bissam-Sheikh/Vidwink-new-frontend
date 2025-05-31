import React, { useEffect, useState } from 'react';
import { BASE_URL } from './config';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${BASE_URL}/ping`)
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => {
        console.error('Error connecting to backend:', err);
        setMessage('Could not connect to backend');
      });
  }, []);

  return (
    <div style={{ padding: 20, fontSize: 18 }}>
      <h2>VidWink is live 🎉</h2>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
