import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Add any global styles here
import App from './app';

const container = document.getElementById('root'); // Assuming your root element has this ID
const root = ReactDOM.createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
);
