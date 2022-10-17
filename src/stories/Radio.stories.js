import { Radio } from "@mui/material";
import {
  RadioButtonBasics,
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
  label: "Radio button Label",
  row: true,
  size: "medium",
  labelPlacement: "end",
  disabled: false,
  checked: true,
};
export const RadiosButtonGroups = RadiosButtonGroup.bind({});
export const RadioButtonDirections = RadioButtonDirection.bind({});
export const RadioButtonControlled = RadioButtonControlleds.bind({});
export const RadioButtonSizes = RadioButtonSize.bind({});
export const RadioButtonLabelPlacement = RadioButtonLabelPlacements.bind({});
export const RadioButtonShowError = RadioButtonShowErrors.bind({});
