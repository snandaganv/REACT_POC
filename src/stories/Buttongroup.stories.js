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
export const ButtonVariants = VariantButtonGroup.bind({});
export const SizesAndColors = GroupSizesColors.bind({});
export const VerticalGroup = GroupOrientation.bind({});
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
