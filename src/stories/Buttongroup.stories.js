import React from "react";

import {
  ButtonGroupDefaults,
  ButtonGroupVariants,
  ButtonGroupSizesColors,
  ButtonGroupVerticals,
  SplitButtons,
} from "../components/buttongroup-component";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";

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
ButtonGroupVariant.args = {
  buttons: [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ],
  buttonData: [
    { variant: "text", arialLabel: "text button group" },
    { variant: "outlined", arialLabel: "outlined button group" },
    { variant: "contained", arialLabel: "contained button group" },
  ],
};

const ButtonGroupSizesColorsTemplate = (args) => (
  <ButtonGroupSizesColors {...args}></ButtonGroupSizesColors>
);
export const ButtonGroupSizesAndColors = ButtonGroupSizesColorsTemplate.bind(
  {}
);
ButtonGroupSizesAndColors.args = {
  buttons: [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ],
  buttonData: [
    { color: "primary", size: "small", arialLabel: "small button group" },
    { color: "secondary", arialLabel: "medium secondary button group" },
    { size: "large", arialLabel: "large button group" },
  ],
};

const ButtonGroupVerticalsTemplate = (args) => (
  <ButtonGroupVerticals {...args}></ButtonGroupVerticals>
);
export const ButtonGroupVertical = ButtonGroupVerticalsTemplate.bind({});
ButtonGroupVertical.args = {
  buttons: [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ],
  buttonData: [
    {
      variant: "outlined",
      orientation: "vertical",
      arialLabel: "vertical outlined button group",
    },
    {
      variant: "contained",
      orientation: "vertical",
      arialLabel: "vertical contained button group",
    },
    {
      variant: "text",
      orientation: "vertical",
      arialLabel: "vertical text button group",
    },
  ],
};

const SplitButtonsTemplate = (args) => <SplitButtons {...args}></SplitButtons>;
export const SplitButton = SplitButtonsTemplate.bind({});
SplitButton.args = {
  options: ["Create a merge commit", "Squash and merge", "Rebase and merge"],
  disabledoption: 0,
  variant: "contained",
  size: "medium",
  color: "primary",
  disabled: false,
  disableRipple: false,
  disableElevation: false,
};
