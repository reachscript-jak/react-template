import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';

import './index.css';
import { Router } from './Router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
