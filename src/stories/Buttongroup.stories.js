import React from "react";

import {
  ButtonGroupDefaults,
  ButtonGroupVariants,
  ButtonGroupSizesColors,
  ButtonGroupVerticals,
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
  },
};

const ButtonGroupDefaultTemplate = (args) => (
  <ButtonGroupDefaults {...args}></ButtonGroupDefaults>
);

export const ButtonGroupDefault = ButtonGroupDefaultTemplate.bind({});
ButtonGroupDefault.args = {
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
const ButtonGroupVariantsTemplate = (args) => (
  <ButtonGroupVariants {...args}></ButtonGroupVariants>
);
export const ButtonGroupVariant = ButtonGroupVariantsTemplate.bind({});

const ButtonGroupSizesColorsTemplate = (args) => (
  <ButtonGroupSizesColors {...args}></ButtonGroupSizesColors>
);
export const ButtonGroupSizesAndColors = ButtonGroupSizesColorsTemplate.bind(
  {}
);
const ButtonGroupVerticalsTemplate = (args) => (
  <ButtonGroupVerticals {...args}></ButtonGroupVerticals>
);
export const ButtonGroupVertical = ButtonGroupVerticalsTemplate.bind({});

const SplitButtonsTemplate = (args) => <SplitButton {...args}></SplitButton>;

export const SplitButtons = SplitButtonsTemplate.bind({});
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
