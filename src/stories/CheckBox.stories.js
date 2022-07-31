import { Checkbox } from "@mui/material";
import {
  CheckBoxes,
  BasicCheckbox,
  Sizes,
  Colors,
  Group,
  FormGroups,
  Inderterminate,
  LabelsPlacement,
} from "../components/Checkbox";

export default {
  title: "Input/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["default", "success", "secondary"],
      control: { type: "radio" },
    },
    labelPlacement: {
      options: ["top", "start", "bottom", "end"],
      control: { type: "radio" },
    },
  },
};
export const Sample = CheckBoxes.bind({});
Sample.args = {
  label: "Label",
  color: "primary",
  size: "medium",
  disabled: false,
  labelPlacement: "end",
};
export const BasicCheckboxes = BasicCheckbox.bind({});
export const Size = Sizes.bind({});
export const Color = Colors.bind({});
export const Groups = Group.bind({});
Groups.args = {
  row: true,
};
export const FormGroup = FormGroups.bind({});
export const Inderterminates = Inderterminate.bind({});
export const LabelPlacement = LabelsPlacement.bind({});
