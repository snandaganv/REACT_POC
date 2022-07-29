import { Checkbox } from "@mui/material";

import {
  BasicCheckbox,
  Sizes,
  Colors,
  Group,
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
  },
};

export const BasicCheckboxes = BasicCheckbox.bind({});
export const Size = Sizes.bind({});
export const Color = Colors.bind({});
export const Groups = Group.bind({});
export const Inderterminates = Inderterminate.bind({});
export const LabelPlacement = LabelsPlacement.bind({});
