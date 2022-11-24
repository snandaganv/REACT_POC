import * as React from "react";
import { PropTypes } from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";
const MenuIconsComponent = (props) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={muiTheme}>
        <div>{props.childComponent(props)}</div>
      </ThemeProvider>
    </React.Fragment>
  );
};

MenuIconsComponent.prototype = {};

MenuIconsComponent.defaultProps = {};

export default MenuIconsComponent;
