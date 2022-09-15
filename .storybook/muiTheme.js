import { createTheme } from '@mui/material/styles';
import "../src/assets/styles/variables.scss";

const muiTheme = createTheme({
  palette: {
    primary: {
        main: $primaryMain,
    },
    error: {
        main: $errorMain,
    },
  },
});

export default muiTheme;