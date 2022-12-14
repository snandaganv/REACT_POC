import * as React from "react";
import { Search } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";

export const SearchIcon = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Search {...props}></Search>
    </ThemeProvider>
  );
};

export default SearchIcon;
