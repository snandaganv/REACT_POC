import React from 'react';
import ReactDOM from 'react-dom/client';
import './MuiClassNameSetup';
import "./index.css";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../.storybook/muiTheme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);