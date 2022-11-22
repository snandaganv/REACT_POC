import { Switch } from "@mui/material";
import {
  SwitchesBasic,
  SwitchLabels,
  SwitchSizes,
  SwitchControlles,
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

export const SwitchBacis = SwitchesBasic.bind({});
SwitchBacis.args = {
  label: "Switch label",
  disabled: false,
  checked: false,
};
export const SwitchLabel = SwitchLabels.bind({});
export const SwitchSize = SwitchSizes.bind({});
export const SwitchControlled = SwitchControlles.bind({});
export const SwitchFormGroup = SwitchFormGroups.bind({});
export const SwitchLabelsPlacements = SwitchLabelsPlacement.bind({});
