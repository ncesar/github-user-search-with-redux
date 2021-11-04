import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ReduxStore } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/colors';

ReactDOM.render(
  <React.StrictMode>
    <ReduxStore>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ReduxStore>
  </React.StrictMode>,
  document.getElementById('root'),
);
