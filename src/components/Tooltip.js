import React from "react";
import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Grid  from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import { ClickAwayListener } from "@mui/material";
import { Fade } from "@mui/material";
import { Zoom } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../.storybook/muiTheme";

export const TooltipsBasic = ({
  title,
  placement,
  arrow,
  icon,
  enterDelay,
  enterNextDelay,
  enterTouchDelay,
  followCursor,
  leaveDelay,
  leaveTouchDelay,
  disableFocusListener,
  disableHoverListener,
  disableInteractive,
  onClose,
  onOpen,
  open,
  TransitionComponent,
  TransitionProps,
  disableTouchListener,
  PopperProps,
  ...props
}) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Tooltip
        title={title}
        placement={placement}
        arrow={arrow}
        enterDelay={enterDelay}
        enterNextDelay={enterNextDelay}
        enterTouchDelay={enterTouchDelay}
        followCursor={followCursor}
        leaveDelay={leaveDelay}
        leaveTouchDelay={leaveTouchDelay}
        onClose={onClose}
        onOpen={onOpen}
        open={open}
        TransitionComponent={TransitionComponent}
        TransitionProps={TransitionProps}
        disableFocusListener={disableFocusListener}
        disableHoverListener={disableHoverListener}
        disableInteractive={disableInteractive}
        disableTouchListener={disableTouchListener}
        PopperProps={PopperProps}
      >
        <IconButton>{icon}</IconButton>
      </Tooltip>
    </ThemeProvider>
  );
};

TooltipsBasic.propTypes = {
  title: PropTypes.node,
  children: PropTypes.any,
  arrow: PropTypes.func,
  disabled: PropTypes.bool,
  open: PropTypes.bool,
  TransitionComponent: PropTypes.element,
  TransitionProps: PropTypes.object,
  PopperProps: PropTypes.object,
  enterDelay: PropTypes.number,
  enterNextDelay: PropTypes.number,
  enterTouchDelay: PropTypes.number,
  leaveDelay: PropTypes.number,
  leaveTouchDelay: PropTypes.number,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  followCursor: PropTypes.bool,
  disableFocusListener: PropTypes.bool,
  disableHoverListener: PropTypes.bool,
  disableInteractive: PropTypes.bool,
  disableTouchListener: PropTypes.bool,
  placement: PropTypes.oneOf([
    "top",
    "top-start",
    "top-end",
    "left",
    "left-start",
    "left-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
  ]),
};
export const TooltipsPositioned = ({ placement }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Box>
        <Grid container justifyContent="center">
          <Grid item>
            <Tooltip title="Add" placement="top-start">
              <Button>top-start</Button>
            </Tooltip>
            <Tooltip title="Add" placement="top">
              <Button>top</Button>
            </Tooltip>
            <Tooltip title="Add" placement="top-end">
              <Button>top-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <Tooltip title="Add" placement="left-start">
              <Button>left-start</Button>
            </Tooltip>
            <br />
            <Tooltip title="Add" placement="left">
              <Button>left</Button>
            </Tooltip>
            <br />
            <Tooltip title="Add" placement="left-end">
              <Button>left-end</Button>
            </Tooltip>
          </Grid>
          <Grid item container xs={6} alignItems="flex-end" direction="column">
            <Grid item>
              <Tooltip title="Add" placement="right-start">
                <Button>right-start</Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Add" placement="right">
                <Button>right</Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Add" placement="right-end">
                <Button>right-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Tooltip title="Add" placement="bottom-start">
              <Button>bottom-start</Button>
            </Tooltip>
            <Tooltip title="Add" placement="bottom">
              <Button>bottom</Button>
            </Tooltip>
            <Tooltip title="Add" placement="bottom-end">
              <Button>bottom-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export const TooltipsArrow = ({ arrow }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Tooltip title="Add" arrow>
        <Button>Arrow</Button>
      </Tooltip>
    </ThemeProvider>
  );
};

export const TooltipsTrigger = ({
  disableFocusListener,
  disableTouchListener,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <div>
        <Grid container justifyContent="center">
          <Grid item>
            <Tooltip disableFocusListener title="Add">
              <Button>Hover or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableHoverListener title="Add">
              <Button>Focus or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title="Add">
              <Button>Hover</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="Add"
                >
                  <Button onClick={handleTooltipOpen}>Click</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export const TooltipsControlled = ({ onClose, onOpen }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Tooltip
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        title="Add"
      >
        <Button>Controlled</Button>
      </Tooltip>
    </ThemeProvider>
  );
};

export const TooltipsTransition = ({
  TransitionComponent,
  TransitionProps,
}) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <div>
        <Tooltip title="Add">
          <Button>Grow</Button>
        </Tooltip>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Add"
        >
          <Button>Fade</Button>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title="Add">
          <Button>Zoom</Button>
        </Tooltip>
      </div>
    </ThemeProvider>
  );
};

export const TooltipsFollowCursor = ({ followCursor }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Tooltip title="You don't have permission to do this" followCursor>
        <Box sx={{ bgcolor: "text.disabled", color: "background.paper", p: 2 }}>
          Disabled Action
        </Box>
      </Tooltip>
    </ThemeProvider>
  );
};
