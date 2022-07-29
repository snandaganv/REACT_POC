import { Button } from "@mui/material";
import {
  Basics,
  HandingClick,
  IconLabelButton,
  Loadings,
} from "../components/Button";

export default {
  title: "Input/Button",
  component: Button,
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
  },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  variant: "contained",
  color: "primary",
  size: "medium",
};

export const BasicButton = Basics.bind({});

export const HandingClicks = HandingClick.bind({});

export const IconLabelButtons = IconLabelButton.bind({});

export const LoadingButtons = Loadings.bind({});
