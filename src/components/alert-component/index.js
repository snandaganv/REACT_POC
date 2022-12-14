import { Alert as AlertMUI, AlertTitle as AlertTitleMUI } from "@mui/material";
import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";

export const Alert = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <AlertMUI {...props}>{props.children}</AlertMUI>
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
