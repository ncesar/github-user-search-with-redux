import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ReduxStore } from 'redux/store';

ReactDOM.render(
  <React.StrictMode>
    <ReduxStore>
      <App />
    </ReduxStore>
  </React.StrictMode>,
  document.getElementById('root'),
);
