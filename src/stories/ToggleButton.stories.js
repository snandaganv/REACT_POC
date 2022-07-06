import ToggleButtons from "../components/ToggleButton";
import Home from "@mui/icons-material/Home";

// export default {
//   title: "Input/ToggleButton",
//   component: ToggleButtons,
//   argTypes: {
//     onclick: {
//       action: "checked",
//     },
//   },
// };

export default {
  title: "Input/Toggle Button",
  component: ToggleButtons,
  argTypes: {
    fontSize: {
      options: ["inherit", "small", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "secondary", "action", "error", "disabled"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <ToggleButtons {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Label",
  color: "error",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};
