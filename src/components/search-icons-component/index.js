import * as React from "react";
import { PropTypes } from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";

const SearchIconsComponent = (props) => {
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <SearchIcon {...props}></SearchIcon>
      </ThemeProvider>
    </>
  );
};

SearchIconsComponent.prototype = {};

SearchIconsComponent.defaultProps = {};

export default SearchIconsComponent;
