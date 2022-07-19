import { Switch } from "@mui/material";
import {
  Switches,
  SwitchSizeColor,
  LabelPlacements,
} from "../components/Switches";

export default {
  title: "Input/Switch",
  component: Switch,
  argTypes: {
    onclick: {
      action: "checked",
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    color: {
      options: ["default", "warning", "primary", "secondary"],
      control: { type: "radio" },
    },
    labelPlacement: {
      options: ["top", "start", "bottom", "end"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Switches {...args} />;
const SwitchSizesColor = (args) => <SwitchSizeColor {...args} />;
const LabelPlacement = (args) => <LabelPlacements {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};

export const SwitchSizesColors = SwitchSizesColor.bind({});
SwitchSizesColors.args = {
  label: "Groups",
  size: "small",
  color: "default",
};

export const LabelsPlacements = LabelPlacement.bind({});
LabelsPlacements.args = {
  labelPlacement: "top",
  size: "medium",
};
