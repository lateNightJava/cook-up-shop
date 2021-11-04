import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import App from './App.jsx';

import configureStore from './configureStore';

import './index.scss';

axios.defaults.baseURL = process.env.API_URL;
// axios.defaults.withCredentials = true;

const cookUpShopApp = (
  <Provider store={configureStore()}> 
    <Router>
      <App />
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  return ReactDOM.render(cookUpShopApp, document.getElementById('root'));
});