import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import AppTwo from './components/AppTwo';
import AppThree from './components/AppThree';
import AppFour from './components/AppFour';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppTwo />
    <AppThree />
    <AppFour />
  </React.StrictMode>
);
