import { Button } from "@mui/material";
import {
  BasicChips,
  ClickableChips,
  Colors,
  Sizes,
  AvatarChip,
  IconChips,
  DoneDeleteIconChips,
  ClickableAndDeletableChips,
  ClickableLinkChips,
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

export const BasicChip = BasicChips.bind({});
BasicChip.args = {
  label: "Chip",
  variant: "contained",
  color: "primary",
  size: "medium",
  direction: "row",
};

export const ClickableChip = ClickableChips.bind({});
export const Color = Colors.bind({});
export const Size = Sizes.bind({});
export const AvatarChips = AvatarChip.bind({});
export const IconChip = IconChips.bind({});
export const DoneDeleteIconChip = DoneDeleteIconChips.bind({});
export const ClickableAndDeletableChip = ClickableAndDeletableChips.bind({});
export const ClickableLinkChip = ClickableLinkChips.bind({});
