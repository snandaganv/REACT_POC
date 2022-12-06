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

const Template1 = (args) => <ChipClickables {...args}></ChipClickables>;

export const ChipClickable = Template1.bind({});
const Template2 = (args) => <ChipsColors {...args}></ChipsColors>;
export const ChipsColor = Template2.bind({});
const Template3 = (args) => <ChipSizes {...args}></ChipSizes>;
export const ChipSize = Template3.bind({});
const Template4 = (args) => <ChipAvatars {...args}></ChipAvatars>;
export const ChipAvatar = Template4.bind({});
const Template5 = (args) => <ChipIcons {...args}></ChipIcons>;
export const ChipIcon = Template5.bind({});
const Template6 = (args) => <ChipClickableLinks {...args}></ChipClickableLinks>;
export const ChipClickableLink = Template6.bind({});
