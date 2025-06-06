import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Add Font Awesome
const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
document.head.appendChild(fontAwesome);

// Add Google Fonts
const googleFonts = document.createElement('link');
googleFonts.rel = 'stylesheet';
googleFonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
document.head.appendChild(googleFonts);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
