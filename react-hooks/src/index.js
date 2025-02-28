import React from 'react';
import ReactDOM from 'react-dom/client';
import AppState from './components/App';
import AppEffect from './components/AppEffect';
import AppRef from './components/AppRef';
import AppReducer from './components/AppReducer';
import AppContext from './components/AppContext';
import AppMemo from './components/AppMemo';
import AppLayout from './components/AppLayout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppState />
    <AppEffect /> 
    <AppRef/>
    <AppReducer/>
    <AppContext/> 
    <AppMemo /> 
    <AppLayout/> */}
  </React.StrictMode>
);
