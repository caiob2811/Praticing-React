import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';


const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
 <BrowserRouter>
      <App />
  </BrowserRouter>
);