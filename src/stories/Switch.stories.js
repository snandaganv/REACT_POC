import { Switch } from "@mui/material";
import {
  Switches,
  SwitchLabels,
  SwitchSizes,
  SwitchControlles,
  SwitchCustomizations,
  SwitchLabelsPlacement,
  SwitchFormGroups,
} from "../components/Switches";

export default {
  title: "Input/Switch",
  component: Switch,
  argTypes: {
    onClick: {
      action: "checked",
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    labelPlacement: {
      options: ["top", "start", "bottom", "end"],
      control: { type: "radio" },
    },
  },
};

export const Switchs = Switches.bind({});
Switchs.args = {
  label: "Switch label",
  disabled: false,
  checked: true,
  defaultChecked: false,
};
export const SwitchLabel = SwitchLabels.bind({});
export const SwitchSize = SwitchSizes.bind({});
export const SwitchControlled = SwitchControlles.bind({});
export const SwitchFormGroup = SwitchFormGroups.bind({});
export const SwitchLabelsPlacements = SwitchLabelsPlacement.bind({});
