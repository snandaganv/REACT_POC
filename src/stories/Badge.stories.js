import { Badge } from "@mui/material";
import {
  Badges,
  BadgeDot,
  BadgeAlignments,
  BadgeVisibility,
} from "../components/Badge";
import { Mail } from "@mui/icons-material";

export default {
  title: "Data Display/Badge",
  component: Badge,
  argTypes: {
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
    variant: {
      options: ["dot", "standard"],
      control: { type: "radio" },
    },
  },
};
const Template = (args) => <Badges {...args}></Badges>;

export const BadgeBasic = Template.bind({});
BadgeBasic.args = {
  color: "primary",
  badgeContent: 4,
  anchorOrigin: { vertical: "top", horizontal: "right" },
  icon: <Mail color="action" />,
};
const Template1 = (args) => <BadgeDot {...args}></BadgeDot>;
export const BadgesDot = Template1.bind({});
const Template2 = (args) => <BadgeAlignments {...args}></BadgeAlignments>;
export const BadgeAlignment = Template2.bind({});
const Template3 = (args) => <BadgeVisibility {...args}></BadgeVisibility>;
export const BadgeVisibilitys = Template3.bind({});
