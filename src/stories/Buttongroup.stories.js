import React from "react";

import { Button } from "../components/Button";
import {
  ButtonGroup,
  ButtonGroupSizesColors,
  ButtonGroupVariant,
  ButtonGroupVerticals,
  SplitButton,
} from "../components/buttongroup-component";

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

const ButtonGroupDefaultTemplate = (args) => {
  const { buttonArray, ...realArgs } = args;
  return (
    <ButtonGroup {...realArgs}>
      {buttonArray.map((buttonLabel) => (
        <Button>{buttonLabel}</Button>
      ))}
    </ButtonGroup>
  );
};

export const ButtonGroupPlayground = ButtonGroupDefaultTemplate.bind({});
ButtonGroupPlayground.args = {
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

const ButtonGroupVariantsTemplate = (args) => ButtonGroupVariant(args);
export const ButtonGroupVariants = ButtonGroupVariantsTemplate.bind({});

const ButtonGroupSizesColorsTemplate = (args) => ButtonGroupSizesColors(args);
export const ButtonGroupSizesAndColors = ButtonGroupSizesColorsTemplate.bind(
  {}
);

const ButtonGroupVerticalsTemplate = (args) => ButtonGroupVerticals(args);

export const ButtonGroupVertical = ButtonGroupVerticalsTemplate.bind({});

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
