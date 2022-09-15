import { Radio } from "@mui/material";
import {
  RadioButtonBasics,
  RadioButtonColor,
  RadioButtonSize,
  RadiosButtonGroup,
  RadioButtonControlleds,
  RadioButtonDirection,
  RadioButtonLabelPlacements,
  RadioButtonShowErrors,
} from "../components/RadioButton";

export default {
  title: "Input/Radio Buttons",
  Component: Radio,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["default", "success", "secondary"],
      control: { type: "radio" },
    },
    labelPlacement: {
      options: ["top", "start", "bottom", "end"],
      control: { type: "radio" },
    },
    disabled: { control: "boolean" },
    onClick: {
      action: "checked",
    },
  },
};

export const RadioButtonBasic = RadioButtonBasics.bind({});
RadioButtonBasic.args = {
  label: "Label",
  row: true,
  size: "medium",
  labelPlacement: "end",
};
export const RadiosButtonGroups = RadiosButtonGroup.bind({});
export const RadioButtonDirections = RadioButtonDirection.bind({});
export const RadioButtonControlled = RadioButtonControlleds.bind({});
export const RadioButtonSizes = RadioButtonSize.bind({});
export const RadioButtonColors = RadioButtonColor.bind({});
export const RadioButtonLabelPlacement = RadioButtonLabelPlacements.bind({});
export const RadioButtonShowError = RadioButtonShowErrors.bind({});
