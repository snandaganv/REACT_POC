import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";
import { PropTypes } from "prop-types";

export const ButtonGroupDefaults = (props) => {
  const {
    variant,
    color,
    size,
    orientation,
    disabled,
    fullWidth,
    disableRipple,
    disableElevation,
    numberOfButtons,
    onClick,
  } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <ButtonGroup
        variant={variant}
        size={size}
        color={color}
        orientation={orientation}
        disabled={disabled}
        fullWidth={fullWidth}
        disableRipple={disableRipple}
        disableElevation={disableElevation}
      >
        {numberOfButtons.map((label, index) => (
          <Button onClick={onClick} key={label}>
            {label}
          </Button>
        ))}
      </ButtonGroup>
    </ThemeProvider>
  );
};
ButtonGroupDefaults.propTypes = {
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
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disableRipple: PropTypes.bool,
  disableElevation: PropTypes.bool,
  numberOfButtons: PropTypes.array,
  onClick: PropTypes.func,
};
ButtonGroupDefaults.defaultProps = {
  numberOfButtons: [],
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

export const ButtonGroupVariants = (props) => {
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
      <ThemeProvider theme={muiTheme}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup variant="contained" aria-label="text button group">
          {buttons}
        </ButtonGroup>
      </ThemeProvider>
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
      <ThemeProvider theme={muiTheme}>
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
        <ButtonGroup color="error" size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </ThemeProvider>
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
      <ThemeProvider theme={muiTheme}>
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
      </ThemeProvider>
    </Box>
  );
};

export const SplitButton = (props) => {
  const {
    options,
    disabledoption,
    variant,
    size,
    color,
    disableElevation,
    disabled,
    disableRipple,
  } = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
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
      <ThemeProvider theme={muiTheme}>
        <ButtonGroup
          variant={variant}
          size={size}
          color={color}
          disabled={disabled}
          disableRipple={disableRipple}
          disableElevation={disableElevation}
          ref={anchorRef}
          aria-label="split button"
        >
          <Button onClick={handleClick}>{options[selectedIndex]} </Button>
          <Button
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
      </ThemeProvider>
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
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === disabledoption - 1}
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
};
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
