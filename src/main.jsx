/**
 * @file src/main.jsx
 * @description Application client entrypoint for Vite React application.
 * Mounts the React DOM root and loads the global design system stylesheet.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

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
