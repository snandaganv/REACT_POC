import { createTheme } from '@mui/material/styles';

import variables from '../src/assets/styles/variables.scss';


const muiTheme = createTheme({
  palette: {
    primary: {
        main: variables.primary,
    },
    error: {
        main: variables.errorMain,
    },
  },
});

export default muiTheme;