import SwitchLabels from "../components/Switches";

export default {
  title: "Input/Switch",
  component: SwitchLabels,
  argTypes: {
    onclick: {
      action: "checked",
    },
  },
};

const Template = (args) => <SwitchLabels {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};
