import { createTheme } from "@mui/material/styles";

import variables from "../src/assets/styles/variables.scss";
import "../src/assets/styles/fonts.scss";
import { palette } from "@mui/system";

const muiTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "capitalize",
          fontStyle: "normal",
          fontWeight: 400,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontStyle: "normal",
          fontWeight: 400,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontStyle: "normal",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontStyle: "normal",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          color: "primary",
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#1A3BDD",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "#C6C8F9;",
          "&.Mui-selected": {
            color: "#ffffff",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          // color: "#1A3BDD",
        },
        label: {
          textTransform: "capitalize",
          fontStyle: "normal",
          color: palette.primary,
        },
        outlinedPrimary: {
          textTransform: "capitalize",
          fontStyle: "normal",
          // color: "white",
        },
      },
    },
  },

  palette: {
    primary: {
      main: variables.primary,
      light: variables.light,
      dark: variables.dark,
    },
    secondary: {
      main: variables.secondaryPrimary,
      light: variables.secondaryLight,
      dark: variables.secondaryDark,
    },
    pastel: {
      main: variables.pastelPrimary,
      light: variables.pastelLight,
      dark: variables.pastelDark,
    },
    yellow: {
      main: variables.yellowPrimary,
      light: variables.yellowLight,
      dark: variables.yellowDark,
    },
    grey: {
      main: variables.greyPrimary,
      light: variables.greyLight,
      dark: variables.greyDark,
    },

    error: {
      main: variables.errorMain,
      light: variables.errorLight,
      dark: variables.errorDark,
    },
    warning: {
      main: variables.warningMain,
      light: variables.warningLight,
      dark: variables.warningDark,
    },
    info: {
      main: variables.infoMain,
      light: variables.infoLight,
      dark: variables.infoDark,
    },
    success: {
      main: variables.successMain,
      light: variables.successLight,
      dark: variables.successDark,
    },
  },
  typography: {
    fontFamily: "Inter var, sans-serif",
    fontStyle: "normal",
    subtitle1: {
      fontSize: 16,
      fontWeight: "regular",
      letterSpacing: "0.15px",
    },
    button: {
      fontSize: 14,
      fontWeight: "medium",
      letterSpacing: "0.4px",
    },
    body1: {
      fontWeight: "regular",
      fontSize: 16,
      letterSpacing: "0.15px",
    },
    button: {
      fontStyle: "normal",
    },
    h1: {
      fontSize: 96,
      fontWeight: "light",
      letterSpacing: "-1.5px",
    },
    h2: {
      fontSize: 60,
      fontWeight: "light",
      letterSpacing: "0.5px",
    },
    h3: {
      fontSize: 48,
      fontWeight: "regular",
      letterSpacing: "0px",
    },
    h4: {
      fontSize: 34,
      fontWeight: "regular",
      letterSpacing: "0.25px",
    },
    h5: {
      fontSize: 24,
      fontWeight: "regular",
      letterSpacing: "0px",
    },
    h6: {
      fontSize: 20,
      fontWeight: "medium",
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: "medium",
      letterSpacing: "0.1px",
    },
    body1: {
      fontSize: 16,
      fontWeight: "regular",
      letterSpacing: "0.15px",
    },
    body2: {
      fontSize: 14,
      fontWeight: "regular",
      letterSpacing: "0.15px",
    },
    caption: {
      fontSize: 12,
      fontWeight: "regular",
      letterSpacing: "0.4px",
    },
    overline: {
      fontSize: 12,
      fontWeight: "regular",
      letterSpacing: "1px",
    },
    avatarLetter: {
      fontSize: 20,
      fontWeight: "regular",
      letterSpacing: "0.14px",
    },
    inputLabel: {
      fontSize: 12,
      fontWeight: "regular",
      letterSpacing: "0.15px",
    },
    helperText: {
      fontSize: 12,
      fontWeight: "regular",
      letterSpacing: "0.4px",
    },
    inputText: {
      fontSize: 16,
      fontWeight: "regular",
      letterSpacing: "0.15px",
    },
    tooltip: {
      fontSize: 10,
      fontWeight: "medium",
      letterSpacing: "0px",
    },
  },
});

export default muiTheme;
