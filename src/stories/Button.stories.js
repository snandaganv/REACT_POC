import { Button } from "@mui/material";
import {
  Defaults,
  ButtonGroups,
  ButtonIcon,
  LoadingButtons,
} from "../components/Button";
import Send from "@mui/icons-material/Send";
import Delete from "@mui/icons-material/Delete";

export default {
  title: "Input/Button",
  component: Button,
  argTypes: {
    direction: {
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: { type: "radio" },
    },
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    loadingPosition: {
      options: ["start", "center", "end"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Defaults {...args} />;
const Groups = (args) => <ButtonGroups {...args} />;
const Icons = (args) => <ButtonIcon {...args} />;
const Loading = (args) => <LoadingButtons {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  direction: "row",
  variant: "contained",
  color: "primary",
  size: "medium",
};

export const ButtonGroup = Groups.bind({});
ButtonGroup.args = {
  direction: "row",
  size: "medium",
};
export const ButtonIcons = Icons.bind({});
ButtonIcons.args = {
  label: "Delete",
  direction: "row",
  variant: "contained",
  endIcon: <Send />,
  startIcon: <Delete />,
};

export const LoadingButton = Loading.bind({});
LoadingButton.args = {
  direction: "row",
  variant: "contained",
  loading: true,
  loadingIndicator: "loading...",
  loadingPosition: "start",
};
