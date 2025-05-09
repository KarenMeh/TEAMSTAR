import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Documentation from './components/Documentation';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/docs" element={<Documentation />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);