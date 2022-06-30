import RadioButton from "../components/RadioButton";

export default {
  title: "Input/Radio",
  Component: RadioButton,
  argTypes: {
    disabled: { control: "boolean" },
    onclick: {
      action: "checked",
    },
  },
};

const Template = (args) => <RadioButton {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  label: "Unchecked",
  disabled: true,
};
