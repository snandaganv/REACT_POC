import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { PropTypes } from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";


export const BackdropDefaults = (props) => {
  const [open, setOpen] = React.useState(false);
  const { label, color, invisible } = props;

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  

  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <Button
          onClick={handleToggle}
          // variant={variant}
          // size={size}
          // color={buttoncolor}
          style={{ textTransform: "capitalize" }}
        >
          {label}
        </Button>
      </ThemeProvider>

      <Backdrop
        sx={{
          // color: { color },
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={handleClose}
        invisible={invisible}
      >
        <ThemeProvider theme={muiTheme}>
          <CircularProgress color={color} />
        </ThemeProvider>
      </Backdrop>
    </div>
  );
};

BackdropDefaults.propTypes = {
  label: PropTypes.string,
  invisible: PropTypes.bool,
  // size: PropTypes.oneOf(["small", "medium", "large"]),
};
