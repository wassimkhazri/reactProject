import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { createStoreHook, Pvider } from 'react-redux';
// import reducer from './reducers/firstReducer';

//const store=createStoreHook(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>

    <App/>
   
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
