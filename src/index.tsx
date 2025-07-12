import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Polyfill for ResizeObserver if not available
if (typeof window !== 'undefined' && !window.ResizeObserver) {
  window.ResizeObserver = class MockResizeObserver {
    observe() { /* Polyfill implementation */ }
    unobserve() { /* Polyfill implementation */ }
    disconnect() { /* Polyfill implementation */ }
  } as any;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
