import Timeline from "@mui/lab/Timeline";

import React from "react";
import {
  TimelineDefaults,
  OppositeContentTimelines,
  ColorsTimeline,
  OutlinedTimelines,
  CustomizedTimelines,
  LeftAlignedTimelines,
  RightAlignedTimelines,
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
export const TimelineDefault = TimelineDefaults.bind({});
TimelineDefault.args = {
  data: [
    { label: "Eat", color: "grey", variant: "filled" },
    { label: "Code", color: "grey", variant: "filled" },
    { label: "Sleep", color: "grey", variant: "filled" },
    { label: "Repeat", color: "grey", variant: "filled" },
  ],
  position: "right",
};
export const TimelineColors = ColorsTimeline.bind({});

export const OutlinedTimeline = OutlinedTimelines.bind({});

export const OppositeContentTimeline = OppositeContentTimelines.bind({});

OppositeContentTimeline.args = {
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

export const RightAlignedTimeline = RightAlignedTimelines.bind({});

RightAlignedTimeline.args = {
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

export const LeftAlignedTimeline = LeftAlignedTimelines.bind({});

LeftAlignedTimeline.args = {
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

export const CustomizedTimeline = CustomizedTimelines.bind({});
CustomizedTimeline.args = {
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

