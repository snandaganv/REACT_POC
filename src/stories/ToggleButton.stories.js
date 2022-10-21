import {
  ToggleButtons,
  ToggleButtonSize,
  ToggleButtonColor,
  ToggleButtonOrientation,
  ToggleButtonExclusiveSelections,
  ToggleButtonMultipleSelections,
} from "../components/ToggleButton";

export default {
  title: "Input/Toggle Button",
  component: ToggleButtons,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
    orientation: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
  },
};

export const ToggleButtonBasic = ToggleButtons.bind({});
ToggleButtonBasic.args = {
  color: "primary",
  disabled: false,
  data: [
    {
      toggleButtonValue: "web",
      toggleButtonLabel: "Web",
    },
    {
      toggleButtonValue: "android",
      toggleButtonLabel: "Android ",
    },
    {
      toggleButtonValue: "ios",
      toggleButtonLabel: "iOS ",
    },
  ],
};
export const ToggleButtonSizes = ToggleButtonSize.bind({});
export const ToggleButtonColors = ToggleButtonColor.bind({});
export const ToggleButtonOrientations = ToggleButtonOrientation.bind({});
export const ToggleButtonExclusiveSelection =
  ToggleButtonExclusiveSelections.bind({});
export const ToggleButtonMultipleSelection =
  ToggleButtonMultipleSelections.bind({});
