import * as React from "react";
import { PropTypes } from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";
const MenuIconsComponent = (props) => {
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <div>{props.childComponent(props)}</div>
      </ThemeProvider>
    </>
  );
};

MenuIconsComponent.prototype = {};

MenuIconsComponent.defaultProps = {};

export default MenuIconsComponent;
