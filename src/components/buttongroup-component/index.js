import * as React from "react";
import { ButtonDefault } from "../Button";
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

export const ButtonGroupDefault = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <ButtonGroup {...props}>{props.children}</ButtonGroup>
    </ThemeProvider>
  );
};
ButtonGroupDefault.propTypes = {
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
  onClick: PropTypes.func,
};
ButtonGroupDefault.defaultProps = {
  size: "medium",
  color: "primary",
  orientation: "horizontal",
  disabled: false,
  fullWidth: false,
  disableRipple: false,
  disableElevation: false,
};
const buttons = [
  <ButtonDefault key="one">One</ButtonDefault>,
  <ButtonDefault key="two">Two</ButtonDefault>,
  <ButtonDefault key="three">Three</ButtonDefault>,
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
      <ButtonGroupDefault variant="outlined" aria-label="outlined button group">
        {buttons}
      </ButtonGroupDefault>
      <ButtonGroupDefault variant="text" aria-label="text button group">
        {buttons}
      </ButtonGroupDefault>
      <ButtonGroupDefault variant="contained" aria-label="text button group">
        {buttons}
      </ButtonGroupDefault>
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
      <ButtonGroupDefault
        color="primary"
        size="small"
        aria-label="small button group"
      >
        {buttons}
      </ButtonGroupDefault>
      <ButtonGroupDefault
        color="secondary"
        aria-label="medium secondary button group"
      >
        {buttons}
      </ButtonGroupDefault>
      <ButtonGroupDefault
        color="error"
        size="large"
        aria-label="large button group"
      >
        {buttons}
      </ButtonGroupDefault>
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
      <ButtonGroupDefault
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroupDefault>
      <ButtonGroupDefault
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroupDefault>
      <ButtonGroupDefault
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroupDefault>
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
          <ButtonDefault onClick={handleClick}>{options[selectedIndex]} </ButtonDefault>
          <ButtonDefault
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </ButtonDefault>
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
