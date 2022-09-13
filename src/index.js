import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { JobProvider } from './context/job-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <JobProvider>
    <App />
  </JobProvider>
);
