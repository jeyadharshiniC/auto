import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/playfair-display'; // Import Playfair Display font
import '@fontsource/roboto';
import '@fontsource/lobster'; // Import Lobster font
import '@fontsource/open-sans'; // Import Open Sans font
import '@fontsource/lora'; // Import Lora font
import '@fontsource/poppins'; // Import Poppins font


const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Arial',
      'sans-serif', 
    ].join(','),
    h1: {
      fontFamily: 'Lobster', // Use Lobster for h1
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontFamily: 'Playfair Display', // Use Lobster for h2
      fontWeight: 500,
      fontSize: '2.5rem',
    },
    body1: {
      fontFamily: 'Open Sans', // Use Open Sans for body1
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: 'Open Sans', // Use Open Sans for body2
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    p:{
      fontFamily: 'Lora', // Use Lobster for h2
      fontWeight: 500,
      fontSize: '2.5rem',

    }
   
   
  },
});

ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))


