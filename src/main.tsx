// Dependencies
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Styles
import './index.css';

// App
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
