import React from "react";

import {
  BasicButtonGroup,
  VariantButtonGroup,
  GroupSizesColors,
  GroupOrientation,
  SplitButton,
} from "../components/buttongroup-component";
import ButtonGroup from "@mui/material/ButtonGroup";

export default {
  title: "Input/Button Group",
  component: ButtonGroup,
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    onClick: {
      action: "clicked",
    },
  },
};

export const Default = BasicButtonGroup.bind({});
Default.args = {
  numberOfButtons: ["one", "two", "three"],
  variant: "contained",
  size: "medium",
  color: "primary",
  orientation: "horizontal",
  disabled: false,
  fullWidth: false,
  disableRipple: false,
  disableElevation: false,
};
// Default.parameters = {
//   docs: {
//     source: {
//       code: `<Button
//       color="primary"
//       onClick={() => {
//         alert("clicked");
//       }}
//     >
//       Click me
//     </Button>`,
//       language: "react",
//       type: "JSX",
//     },
//   },
// };
export const ButtonVariants = VariantButtonGroup.bind({});
ButtonVariants.parameters = {
  docs: {
    source: {
      code: `    <Box
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
    </Box>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const SizesAndColors = GroupSizesColors.bind({});
SizesAndColors.parameters = {
  docs: {
    source: {
      code: `<Box
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
        <ButtonGroup color="error" size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
    </Box>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const VerticalGroup = GroupOrientation.bind({});
VerticalGroup.parameters = {
  docs: {
    source: {
      code: `<Box
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
    </Box>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const SplitButtons = SplitButton.bind({});
SplitButtons.args = {
  options: ["Create a merge commit", "Squash and merge", "Rebase and merge"],
  disabledoption: 0,
  variant: "contained",
  size: "medium",
  color: "primary",
  disabled: false,
  disableRipple: false,
  disableElevation: false,
};
SplitButtons.parameters = {
  docs: {
    source: {
      code: `<ButtonGroup
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
  </Popper>`,
      language: "react",
      type: "JSX",
    },
  },
};
