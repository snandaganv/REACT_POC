import { Badge } from "@mui/material";
import {
  BadgesBasic,
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

export const BadgeBasic = BadgesBasic.bind({});
BadgeBasic.args = {
  color: "primary",
  badgeContent: 4,
  anchorOrigin: { vertical: "top", horizontal: "right" },
  icon: <Mail color="action" />,
};

export const BadgesDot = BadgeDot.bind({});
export const BadgeAlignment = BadgeAlignments.bind({});
export const BadgeVisibilitys = BadgeVisibility.bind({});
