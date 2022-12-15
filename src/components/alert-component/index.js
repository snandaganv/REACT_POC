import { AlertTitle as AlertTitleMUI } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";

export const AlertRef = (props, ref) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <MuiAlert ref={ref} {...props}>
        {props.children}
      </MuiAlert>
    </ThemeProvider>
  );
};

export const AlertTitle = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <AlertTitleMUI {...props}>{props.children}</AlertTitleMUI>
    </ThemeProvider>
  );
};

export const Alert = React.forwardRef(AlertRef);
