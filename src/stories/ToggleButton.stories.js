import {
  ToggleButtons,
  ToggleButtonsDisabled,
  Size,
  Color,
  Orientation,
  ExclusiveSelections,
  MultipleSelections,
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
//const Disable = (args) => <ToggleButtonsDisabled {...args} />;
//const Sizess = (args) => <Size {...args} />;
//const Colores = (args) => <Color {...args} />;
//const Orientatio = (args) => <Orientation {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Label",
};

// export const Disabled = Disable.bind({});
// Disabled.args = {
//   label: "Disabled",
//   disabled: true,
// };

// export const Sizes = Sizess.bind({});
// Sizes.args = {
//   size: "small",
// };

// export const Colors = Colores.bind({});
// Colors.args = {
//   color: "secondary",
// };

// export const Orientations = Orientatio.bind({});
// Orientation.args = {
//   label: "Vision",
//   orientation: "vertical",
// };

export const ExclusiveSelection = ExclusiveSelections.bind({});
export const MultipleSelection = MultipleSelections.bind({});
export const Sizes = Size.bind({});
export const Colors = Color.bind({});
export const Orientations = Orientation.bind({});
