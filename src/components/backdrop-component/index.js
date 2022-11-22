import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import { PropTypes } from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";

const BackdropComponent = (props) => {
  const [open, setOpen] = React.useState(false);
  const { label, color, invisible, circularProgress } = props;

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <Button onClick={handleToggle} style={{ textTransform: "capitalize" }}>
          {label}
        </Button>
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

BackdropComponent.propTypes = {
  label: PropTypes.string,
  invisible: PropTypes.bool,
};

export default BackdropComponent;
