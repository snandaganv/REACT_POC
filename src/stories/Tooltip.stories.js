import {
  TooltipsBasic,
  TooltipsPositioned,
  TooltipsArrow,
  TooltipsTrigger,
  TooltipsControlled,
  TooltipsTransition,
  TooltipsFollowCursor,
} from "../components/Tooltip";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { Tooltip } from "@mui/material";

export default {
  title: "Data Display/Tooltip",
  component: Tooltip,
  argTypes: {
    placement: {
      options: [
        "top",
        "top-start",
        "top-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
      ],
      control: { type: "radio" },
    },
    arrow: { control: "boolean" },
  },
};

export const TooltipBasic = TooltipsBasic.bind({});
TooltipBasic.args = {
  title: "Information tooltip ",
  icon: <InfoOutlined />,
};
export const TooltipPositioned = TooltipsPositioned.bind({});
export const TooltipArrow = TooltipsArrow.bind({});
export const TooltipTrigger = TooltipsTrigger.bind({});
export const TooltipControlled = TooltipsControlled.bind({});
export const TooltipTransition = TooltipsTransition.bind({});
export const TooltipFollowCursor = TooltipsFollowCursor.bind({});
