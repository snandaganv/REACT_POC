import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import { PropTypes } from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";

export const BackdropDefaults = (props) => {
  const [open, setOpen] = React.useState(false);
  const { label, invisible } = props;

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <Button onClick={handleToggle}>{label}</Button>
      </ThemeProvider>

      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={handleClose}
        invisible={invisible}
      ></Backdrop>
    </div>
  );
};

BackdropDefaults.propTypes = {
  label: PropTypes.string,
  invisible: PropTypes.bool,
};
