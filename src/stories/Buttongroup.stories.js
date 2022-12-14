import React from "react";

import {
  ButtonGroupDefault,
  ButtonGroupVariants,
  ButtonGroupSizesColors,
  ButtonGroupVerticals,
  SplitButton,
} from "../components/buttongroup-component";
import { ButtonDefault } from "../components/Button";

export default {
  title: "Input/Button Group",
  component: ButtonGroupDefault,
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

const ButtonGroupDefaultTemplate = (args) => {
  const { buttonArray, ...realArgs } = args;
  return (
    <ButtonGroupDefault {...realArgs}>
      {buttonArray.map((buttonLabel) => (
        <ButtonDefault>{buttonLabel}</ButtonDefault>
      ))}
    </ButtonGroupDefault>
  );
};

export const ButtonGroupDefaults = ButtonGroupDefaultTemplate.bind({});
ButtonGroupDefaults.args = {
  buttonArray: ["one", "two", "three"],
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
  ButtonGroupVariants(args)
);
export const ButtonGroupVariant = ButtonGroupVariantsTemplate.bind({});
ButtonGroupVariant.parameters = {
  docs: {
    source: {
      code: `const buttons = [
        <Button key="one">One</Button>,
        <Button key="two">Two</Button>,
        <Button key="three">Three</Button>,
      ];
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
    </Box>`,
      language: "html",
    },
  },
};

const ButtonGroupSizesColorsTemplate = (args) => ButtonGroupSizesColors(args);
export const ButtonGroupSizesAndColors = ButtonGroupSizesColorsTemplate.bind(
  {}
);

const ButtonGroupVerticalsTemplate = (args) => ButtonGroupVerticals(args);

export const ButtonGroupVertical = ButtonGroupVerticalsTemplate.bind({});
ButtonGroupVertical.parameters = {
  docs: {
    source: {
      code: `const buttons = [
        <Button key="one">One</Button>,
        <Button key="two">Two</Button>,
        <Button key="three">Three</Button>,
      ];

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
    </Box>`,
      language: "html",
    },
  },
};

const SplitButtonsTemplate = (args) => SplitButton(args);

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
      code: `
      const options = ["Create a merge commit", "Squash and merge", "Rebase and merge"]
      <ButtonGroup
      variant="contained"
      size="medium"
      color=primary
      disabled=false
      disableRipple=false
      disableElevation=false
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
      language: "html",
    },
  },
};
