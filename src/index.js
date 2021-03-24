import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.js';
import theme from 'theme';
import './app.css';
import { MuiThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
