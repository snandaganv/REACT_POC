import CheckBoxes from "../components/Checkbox";

export default {
  title: "Input/Checkbox",
  component: CheckBoxes,
  argTypes: {
    onclick: {
      action: "checked",
    },
  },
};

const Template = (args) => <CheckBoxes {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};

export const Group = Template.bind({});
Group.args = {
  label: "USA",
  asideContent: <CheckBoxes label="Poland" />,
};
