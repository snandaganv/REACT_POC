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
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    orientation: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <ToggleButtons {...args} />;

export const ToggleButtonBasic = Template.bind({});
ToggleButtonBasic.args = {
  label: "Label",
};
export const ToggleButtonSizes = ToggleButtonSize.bind({});
export const ToggleButtonColors = ToggleButtonColor.bind({});
export const ToggleButtonOrientations = ToggleButtonOrientation.bind({});
export const ToggleButtonExclusiveSelection =
  ToggleButtonExclusiveSelections.bind({});
export const ToggleButtonMultipleSelection =
  ToggleButtonMultipleSelections.bind({});
