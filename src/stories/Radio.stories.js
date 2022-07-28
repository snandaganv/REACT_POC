import { Radio } from "@mui/material";
import {
  RadiosGroups,
  Direction,
  Size,
  Color,
  LabelPlacements,
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
    disabled: { control: "boolean" },
    onClick: {
      action: "checked",
    },
  },
};

export const RadioGroups = RadiosGroups.bind({});
export const Directions = Direction.bind({});
export const Sizes = Size.bind({});
export const Colors = Color.bind({});
export const LabelPlacement = LabelPlacements.bind({});
