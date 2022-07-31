import { Switch } from "@mui/material";
import {
  Switches,
  BasicsSwitches,
  Labels,
  Sizes,
  Colors,
  Controlles,
  SwitchFormGroups,
  LabelsPlacement,
  Customizations,
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

export const Basic = Switches.bind({});
Basic.args = {
  label: "Label",
};
export const BasicSwitches = BasicsSwitches.bind({});
export const Label = Labels.bind({});
export const Size = Sizes.bind({});
export const Color = Colors.bind({});
export const Controlled = Controlles.bind({});
export const SwitchFormGroup = SwitchFormGroups.bind({});
export const LabelPlacement = LabelsPlacement.bind({});
export const Customization = Customizations.bind({});
