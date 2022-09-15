import { Switch } from "@mui/material";
import {
  Switches,
  SwitchesBasics,
  SwitchLabels,
  SwitchColors,
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

export const Switchs = Switches.bind({});
Switchs.args = {
  label: "Label",
};
export const SwitchesBasic = SwitchesBasics.bind({});
export const SwitchLabel = SwitchLabels.bind({});
export const SwitchSize = SwitchSizes.bind({});
export const SwitchColor = SwitchColors.bind({});
export const SwitchControlled = SwitchControlles.bind({});
export const SwitchFormGroup = SwitchFormGroups.bind({});
export const SwitchLabelsPlacements = SwitchLabelsPlacement.bind({});
export const SwitchCustomization = SwitchCustomizations.bind({});
