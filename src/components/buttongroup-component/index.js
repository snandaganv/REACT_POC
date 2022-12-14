import * as React from "react";
import { Button } from "../Button";
import { ButtonGroup as ButtonGroupMUI } from "@mui/material";
import { Box, Grow, Paper, Popper, MenuItem, MenuList } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";
import { PropTypes } from "prop-types";

export const ButtonGroup = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <ButtonGroupMUI {...props}>{props.children}</ButtonGroupMUI>
    </ThemeProvider>
  );
};
ButtonGroup.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "success",
    "secondary",
    "error",
    "info",
    "warning",
  ]),
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disableRipple: PropTypes.bool,
  disableElevation: PropTypes.bool
};
ButtonGroup.defaultProps = {
  size: "medium",
  color: "primary",
  orientation: "horizontal",
  disabled: false,
  fullWidth: false,
  disableRipple: false,
  disableElevation: false,
};
const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

export const ButtonGroupVariant = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="text button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup variant="contained" aria-label="text button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
};

export const ButtonGroupSizesColors = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        color="primary"
        size="small"
        aria-label="small button group"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        color="secondary"
        aria-label="medium secondary button group"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        color="error"
        size="large"
        aria-label="large button group"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
};

export const ButtonGroupVerticals = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
};
// const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

export const SplitButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${props.options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup {...props} ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick}>{props.options[selectedIndex]}</Button>
        <Button
          {...props}
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {props.options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}

SplitButton.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "success",
    "secondary",
    "error",
    "info",
    "warning",
  ]),
  disabledoption: PropTypes.bool,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  disableElevation: PropTypes.bool,
  options: PropTypes.array,
  onClick: PropTypes.func,
};
SplitButton.defaultProps = {
  options: [],
  size: "medium",
  color: "primary",
  disabled: false,
  fullWidth: false,
  disableRipple: false,
  disableElevation: false,
};
