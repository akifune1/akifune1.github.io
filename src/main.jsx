/**
 * @file src/main.jsx
 * @description Application client entrypoint for Vite React application.
 * Mounts the React DOM root and loads the shared design system plus mobile adaptations.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/mobile.css';

/**
 * Initializes and mounts the React root application.
 */
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
