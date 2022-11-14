import {
  TooltipsBasic,
  TooltipsPositioned,
  TooltipsArrow,
  TooltipsTrigger,
  TooltipsControlled,
  TooltipsTransition,
  TooltipsFollowCursor,
} from "../components/Tooltip";

export default {
  title: "Data Display/Tooltip",
  argTypes: {
    placement: {
      options: [
        "top",
        "top-start",
        "top-end",
        "left-start",
        "left",
        "left-end",
        "bottom-start",
        "bottom",
        "bottom-end",
      ],
      control: { type: "radio" },
    },
    arrow: { control: "boolean" },
  },
};
const Template = (args) => <TooltipsBasic {...args}></TooltipsBasic>;
export const TooltipBasic = Template.bind({});
TooltipBasic.args = {
  title: "Delete",
};

export const TooltipPositioned = TooltipsPositioned.bind({});
export const TooltipArrow = TooltipsArrow.bind({});
export const TooltipTrigger = TooltipsTrigger.bind({});
export const TooltipControlled = TooltipsControlled.bind({});
export const TooltipTransition = TooltipsTransition.bind({});
export const TooltipFollowCursor = TooltipsFollowCursor.bind({});
