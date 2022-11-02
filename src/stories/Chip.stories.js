import { Chip } from "@mui/material";
import {
  ChipsBasics,
  ChipClickables,
  ChipsColors,
  ChipSizes,
  ChipIcons,
  ChipAvatars,
  ChipClickableLinks,
} from "../components/Chip";

export default {
  title: "Data Display/Chip",
  component: Chip,
  argTypes: {
    variant: {
      options: ["filled", "outlined"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
    onClick: { action: "Clicked" },
    direction: {
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: { type: "radio" },
    },
  },
};

export const ChipsBasic = ChipsBasics.bind({});
ChipsBasic.args = {
  label: "Chip",
  variant: "outlined",
  color: "primary",
  size: "medium",
  direction: "row",
  disabled: false,
};

export const ChipClickable = ChipClickables.bind({});
export const ChipsColor = ChipsColors.bind({});
export const ChipSize = ChipSizes.bind({});
export const ChipAvatar = ChipAvatars.bind({});
export const ChipIcon = ChipIcons.bind({});
export const ChipClickableLink = ChipClickableLinks.bind({});
