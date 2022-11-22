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

export const ButtonGroupVariants = (props) => {
  const { buttons, buttonData } = props;
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
        {buttonData.map((data) => (
          <ButtonGroup
            key={data.variant}
            variant={data.variant}
            aria-label={data.arialLabel}
          >
            {buttons}
          </ButtonGroup>
        ))}
      </ThemeProvider>
    </Box>
  );
};

ButtonGroupVariants.propTypes = {
  buttonData: PropTypes.array,
  buttons: PropTypes.array,
};
ButtonGroupVariants.defaultProps = {
  buttonData: [],
  buttons: [],
};

export const ButtonGroupSizesColors = (props) => {
  const { buttons, buttonData } = props;
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
        {buttonData.map((data) => (
          <ButtonGroup
            key={data.size}
            color={data.color}
            size={data.size}
            aria-label={data.label}
          >
            {buttons}
          </ButtonGroup>
        ))}
      </ThemeProvider>
    </Box>
  );
};

ButtonGroupSizesColors.propTypes = {
  buttonData: PropTypes.array,
  buttons: PropTypes.array,
};
ButtonGroupSizesColors.defaultProps = {
  buttonData: [],
  buttons: [],
};
export const ButtonGroupVerticals = (props) => {
  const { buttons, buttonData } = props;
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
        {buttonData.map((data) => (
          <ButtonGroup
            key={data.variant}
            orientation={data.orientation}
            aria-label={data.arialLabel}
            variant={data.variant}
          >
            {buttons}
          </ButtonGroup>
        ))}
      </ThemeProvider>
    </Box>
  );
};

ButtonGroupVerticals.propTypes = {
  buttonData: PropTypes.array,
  buttons: PropTypes.array,
};
ButtonGroupVerticals.defaultProps = {
  buttonData: [],
  buttons: [],
};
export const SplitButtons = (props) => {
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
SplitButtons.propTypes = {
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
  disabledoption: PropTypes.number,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  disableElevation: PropTypes.bool,
  options: PropTypes.array,
  onClick: PropTypes.func,
};
SplitButtons.defaultProps = {
  options: [],
  size: "medium",
  color: "primary",
  disabledoption: 0,
  disabled: false,
  fullWidth: false,
  disableRipple: false,
  disableElevation: false,
};
