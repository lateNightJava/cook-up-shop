import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.jsx';

const appRouting = (
  <Router>
    <App />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  return ReactDOM.render(appRouting, document.getElementById('root'));
});