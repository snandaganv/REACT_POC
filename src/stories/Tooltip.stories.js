import {
  BasicTooltips,
  PositionedTooltips,
  ArrowTooltips,
  TriggerTooltips,
  ControlledTooltips,
  TransitionTooltips,
  FollowCursorTooltips,
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

export const BasicTooltip = BasicTooltips.bind({});
BasicTooltip.args = {
  title: "Delete",
};
export const PositionedTooltip = PositionedTooltips.bind({});
export const ArrowTooltip = ArrowTooltips.bind({});
export const TriggerTooltip = TriggerTooltips.bind({});
export const ControlledTooltip = ControlledTooltips.bind({});
export const TransitionTooltip = TransitionTooltips.bind({});
export const FollowCursorTooltip = FollowCursorTooltips.bind({});
