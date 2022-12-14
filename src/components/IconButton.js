import { IconButton as IconButtonMUI } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import muiTheme from "../../.storybook/muiTheme";

export const IconButton = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <IconButtonMUI {...props}>{props.children}</IconButtonMUI>
    </ThemeProvider>
  );
};
