import { Radio } from "@mui/material";
import {
  Basics,
  RadiosGroups,
  Controlleds,
  Direction,
  Size,
  Color,
  LabelPlacements,
  ShowErrors,
} from "../components/RadioButton";

export default {
  title: "Input/Radio",
  Component: Radio,
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
    disabled: { control: "boolean" },
    onClick: {
      action: "checked",
    },
  },
};

export const Basic = Basics.bind({});
Basic.args = {
  label: "Label",
  row: true,
  size: "medium",
  labelPlacement: "end",
};
export const RadioGroups = RadiosGroups.bind({});
export const Directions = Direction.bind({});
export const Controlled = Controlleds.bind({});
export const Sizes = Size.bind({});
export const Colors = Color.bind({});
export const LabelPlacement = LabelPlacements.bind({});
export const ShowError = ShowErrors.bind({});
