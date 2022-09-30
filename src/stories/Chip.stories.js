import { Button } from "@mui/material";
import {
  ChipsBasics,
  ChipClickables,
  ChipsColors,
  ChipSizes,
  ChipIcons,
  ChipAvatars,
  ChipClickableAndDeletables,
  ChipDoneDeleteIcons,
  ChipClickableLinks,
} from "../components/Chip";

export default {
  title: "Data Display/Chip",
  component: Button,
  argTypes: {
    variant: {
      options: ["contained", "outlined"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    color: {
      options: [
        "default",
        "primary",
        "success",
        "secondary",
        "error",
        "info",
        "warning",
      ],
      control: { type: "radio" },
    },
    direction: {
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: { type: "radio" },
    },
  },
};

export const ChipsBasic = ChipsBasics.bind({});
ChipsBasic.args = {
  label: "Chip",
  variant: "contained",
  color: "primary",
  size: "medium",
  direction: "row",
};

export const ChipClickable = ChipClickables.bind({});
export const ChipsColor = ChipsColors.bind({});
export const ChipSize = ChipSizes.bind({});
export const ChipAvatar = ChipAvatars.bind({});
export const ChipIcon = ChipIcons.bind({});
export const ChipDoneDeleteIcon = ChipDoneDeleteIcons.bind({});
export const ChipClickableAndDeletable = ChipClickableAndDeletables.bind({});
export const ChipClickableLink = ChipClickableLinks.bind({});
