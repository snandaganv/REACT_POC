import Timeline from "@mui/lab/Timeline";

import React from "react";
import {
  TimelinesBasic,
  TimelinesColors,
  TimelinesOutlined,
  TimelinesOppositeContent,
  TimelinesRightAligned,
  TimelinesLeftAligned,
  TimelinesCustomized

} from "../components/timeline-component";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";

export default {
  title: "Feedback/Timeline",
  component: Timeline,
  argTypes: {
    position: {
      options: ["alternate", "left", "right"],
      control: { type: "radio" },
    },
  },
};

const TimelinesBasicTemplate = (args) => <TimelinesBasic {...args}></TimelinesBasic>
export const TimelineBasic = TimelinesBasicTemplate.bind({});
TimelineBasic.args = {
  data: [
    { label: "Eat", color: "grey", variant: "filled" },
    { label: "Code", color: "grey", variant: "filled" },
    { label: "Sleep", color: "grey", variant: "filled" },
    { label: "Repeat", color: "grey", variant: "filled" },
  ],
  position: "right",
};

const TimelinesColorsTemplate = (args) => <TimelinesColors {...args}></TimelinesColors>
export const TimelineColors = TimelinesColorsTemplate.bind({});
TimelineColors.args = {
  data: [
    { label: "Grey", color: "grey", variant: "filled" },
    { label: "Primary", color: "primary" },
    { label: "Secondary", color: "secondary" },
    { label: "Success", color: "success" },
    { label: "Info", color: "info" },
    { label: "Warning", color: "warning" },
    { label: "Error", color: "error" },
  ],
  position: "right",
};

const TimelinesOutlinedTemplate = (args) => <TimelinesOutlined {...args}></TimelinesOutlined>
export const TimelineOutlined = TimelinesOutlinedTemplate.bind({});
TimelineOutlined.args = {
  data: [
    { label: "Eat", color: "grey", variant: "outlined" },
    { label: "Code", color: "primary", variant: "outlined" },
    { label: "Sleep", color: "secondary", variant: "outlined" },
    { label: "Repeat", color: "warning", variant: "outlined" },
  ],
  position: "alternate",
};

const TimelinesOppositeContentTemplate = (args) => <TimelinesOppositeContent {...args}></TimelinesOppositeContent>
export const TimelineOppositeContent = TimelinesOppositeContentTemplate.bind({});
TimelineOppositeContent.args = {
  oppositeTimelineData: [
    { label: "Eat", oppositeLabel: "9.30am", color: "grey", variant: "filled" },
    {
      label: "Code",
      oppositeLabel: "11.00am",
      color: "grey",
      variant: "filled",
    },
    {
      label: "Sleep",
      oppositeLabel: "12.00am",
      color: "grey",
      variant: "filled",
    },
    {
      label: "Repeat",
      oppositeLabel: "9.00am",
      color: "grey",
      variant: "filled",
    },
  ],
  position: "right",
};

const TimelinesRightAlignedTemplate = (args) => <TimelinesRightAligned {...args}></TimelinesRightAligned>
export const TimelineRightAligned = TimelinesRightAlignedTemplate.bind({});
TimelineRightAligned.args = {
  oppositeTimelineData: [
    { label: "Eat", oppositeLabel: "9.30am", color: "grey", variant: "filled" },
    {
      label: "Code",
      oppositeLabel: "11.00am",
      color: "grey",
      variant: "filled",
    },
    {
      label: "Sleep",
      oppositeLabel: "12.00am",
      color: "grey",
      variant: "filled",
    },
    {
      label: "Repeat",
      oppositeLabel: "9.00am",
      color: "grey",
      variant: "filled",
    },
  ],
  position: "right",
};
const TimelinesLeftAlignedTemplate = (args) => <TimelinesLeftAligned {...args}></TimelinesLeftAligned>
export const TimelineLeftAligned = TimelinesLeftAlignedTemplate.bind({});
TimelineLeftAligned.args = {
  oppositeTimelineData: [
    { label: "Eat", oppositeLabel: "9.30am", color: "grey", variant: "filled" },
    {
      label: "Code",
      oppositeLabel: "11.00am",
      color: "grey",
      variant: "filled",
    },
    {
      label: "Sleep",
      oppositeLabel: "12.00am",
      color: "grey",
      variant: "filled",
    },
    {
      label: "Repeat",
      oppositeLabel: "9.00am",
      color: "grey",
      variant: "filled",
    },
  ],
  position: "left",
};

const TimelinesCustomizedTemplate = (args) => <TimelinesCustomized {...args}></TimelinesCustomized>
export const TimelineCustomized = TimelinesCustomizedTemplate.bind({});
TimelineCustomized.args = {
  customizedTimelineData: [
    {
      label: "Eat",
      oppositeLabel: "9.00am",
      text: "Because you need strength",
      icon: <FastfoodIcon />,
      color: "grey",
      variant: "filled",
    },
    {
      label: "Code",
      oppositeLabel: "10.00am",
      text: "Because it's awesome!",
      icon: <LaptopMacIcon />,
      color: "primary",
      variant: "filled",
    },
    {
      label: "Sleep",
      oppositeLabel: "",
      text: "Because you need rest",
      icon: <HotelIcon />,
      color: "primary",
      variant: "outlined",
    },
    {
      label: "Repeat",
      oppositeLabel: "",
      text: "Because this is the life you love!",
      icon: <RepeatIcon />,
      color: "secondary",
      variant: "filled",
    },
  ],
  position: "alternate",
};

