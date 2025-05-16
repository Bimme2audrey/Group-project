import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import 'aos/dist/aos.css';

import App from './App'; 
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';    

AOS.init({
  once: false,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
