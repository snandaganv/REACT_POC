import { Checkbox } from "@mui/material";
import {
  CheckBoxBasics,
  CheckboxSizes,
  CheckboxGroup,
  CheckboxFormGroups,
  CheckboxInderterminate,
  CheckboxLabelsPlacement,
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
    onClick: { action: "check" },
  },
};
export const CheckBoxBasic = CheckBoxBasics.bind({});
CheckBoxBasic.args = {
  label: "Checkbox label",
  size: "medium",
  checked: true,
  disabled: false,
  labelPlacement: "end",
};
export const CheckboxSize = CheckboxSizes.bind({});
export const CheckboxGroups = CheckboxGroup.bind({});
CheckboxGroups.args = {
  row: true,
};
export const CheckboxFormGroup = CheckboxFormGroups.bind({});
export const CheckboxInderterminates = CheckboxInderterminate.bind({});
export const CheckboxLabelsPlacements = CheckboxLabelsPlacement.bind({});
