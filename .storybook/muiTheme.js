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
      main: variables.secondaryPrimary,
      light:variables.secondaryLight,
      dark: variables.secondaryDark,
      
  },
  pastel: {
    main: variables.pastelPrimary,
    light:variables.pastelLight,
    dark: variables.pastelDark,
  },
  yellow: {
    main: variables.yellowPrimary,
    light:variables.yellowLight,
    dark: variables.yellowDark,
  },
  grey: {
    main: variables.greyPrimary,
    light:variables.greyLight,
    dark: variables.greyDark,
  },
 
    error: {
        main: variables.errorMain,
        light: variables.errorLight,
        dark: variables.errorDark
    },
    warning: {
      main:variables.warningMain,
      light: variables.warningLight,
      dark: variables.warningDark
    },
    info: {
      main:variables.infoMain,
      light: variables.infoLight,
      dark: variables.infoDark
    },
    success: {
      main: variables.successMain,
      light: variables.successLight,
      dark: variables.successDark
    }
  },
});

export default muiTheme;