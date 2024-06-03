// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif,Titillium+Web',
    p: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 'normal',
    },
    h2: {
      fontFamily: 'Montserrat, Arial, sans-serif,Barlow+Condensed',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
    // Add other variants as needed
  },
});

export default theme;
