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
