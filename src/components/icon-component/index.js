import * as React from "react";
import { PropTypes } from "prop-types";
import { Icon } from "@mui/material";
import Home from "@mui/icons-material/Home";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";

const IconComponent = (props) => {
  const { color, fontSize } = props;

  return (
    <React.Fragment>
      <ThemeProvider theme={muiTheme}>
        <Icon {...props}>
          <Home color={color} fontSize={fontSize}></Home>
        </Icon>
      </ThemeProvider>
    </React.Fragment>
  );
};

IconComponent.prototype = {
  fontSize: PropTypes.oneOf(["inherit", "small", "medium", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "action",
    "error",
    "disabled",
  ]),
};

IconComponent.defaultProps = {};

export default IconComponent;
