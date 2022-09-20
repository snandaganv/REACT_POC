import { createTheme } from '@mui/material/styles';

import variables from '../src/assets/styles/variables.scss';


const muiTheme = createTheme({
  palette: {
    primary: {
        main: variables.primary,
        light:variables.light,
        dark: variables.dark,

    },
    secondary: {
      main: variables.secondPrimary,
      light:variables.secondLight,
      dark: variables.secondDark,
      
  },
 
    error: {
        main: variables.errorMain,
    },
  },
});

export default muiTheme;