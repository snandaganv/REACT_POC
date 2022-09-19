import {
  Badges,
  ShoppingCartBadge,
  Customizations,
  DotBadge,
  BadgeAlignments,
  BadgeVisibility,
} from "../components/Badge";
import { Mail } from "@mui/icons-material";

export default {
  title: "Data Display/Badge",
  argTypes: {
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
  },
};

export const Badge = Badges.bind({});
Badge.args = {
  color: "primary",
  badgeContent: 4,
  anchorOrigin: { vertical: "top", horizontal: "right" },
  icon: <Mail color="action" />,
};

export const ShoppingCartBadges = ShoppingCartBadge.bind({});
ShoppingCartBadges.args = {
  color: "error",
  badgeContent: 7,
};

export const Customization = Customizations.bind({});
export const DotBadges = DotBadge.bind({});
export const BadgeAlignment = BadgeAlignments.bind({});
export const BadgeVisibilitys = BadgeVisibility.bind({});
