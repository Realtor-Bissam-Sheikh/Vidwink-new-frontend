import { BASE_URL } from './config';

fetch(`${BASE_URL}/ping`)
  .then(response => response.text())
  .then(data => console.log(data));
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
