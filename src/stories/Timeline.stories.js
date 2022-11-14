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

const TimelineDefaultsTemplate = (args)=><TimelineDefaults {...args}></TimelineDefaults>
export const TimelineDefault = TimelineDefaultsTemplate.bind({});
TimelineDefault.args = {
  data: [
    { label: "Eat", color: "grey", variant: "filled" },
    { label: "Code", color: "grey", variant: "filled" },
    { label: "Sleep", color: "grey", variant: "filled" },
    { label: "Repeat", color: "grey", variant: "filled" },
  ],
  position: "right",
};

const ColorsTimelineTemplate = (args)=><ColorsTimeline {...args}></ColorsTimeline>
export const TimelineColors = ColorsTimelineTemplate.bind({});
TimelineColors.args={
  position:'alternate',
  data:[{label:'Grey',color:'grey'},
  {label:'Primary',color:'primary'},
  {label:'Secondary',color:'secondary'},
  {label:'Success',color:'success'},
  {label:'Info',color:'info'},
  {label:'Warning',color:'warning'},
  {label:'Error',color:'error'},
]
}

const OutlinedTimelinesTemplate = (args)=><OutlinedTimelines {...args}></OutlinedTimelines>
export const OutlinedTimeline = OutlinedTimelinesTemplate.bind({});
OutlinedTimeline.args={
  position:'alternate',
  data:[{variant:'outlined',label:'Eat'},
  {variant:'outlined',label:'Code',color:'primary'},
  {variant:'outlined',label:'Sleep',color:'secondary'},
  {variant:'outlined',label:'Repeat'}]
}

const OppositeContentTimelinesTemplate = (args)=><OppositeContentTimelines {...args}></OppositeContentTimelines>
export const OppositeContentTimeline = OppositeContentTimelinesTemplate.bind({});
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

const RightAlignedTimelinesTemplate = (args)=><RightAlignedTimelines {...args}></RightAlignedTimelines>
export const RightAlignedTimeline = RightAlignedTimelinesTemplate.bind({});

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

const LeftAlignedTimelinesTemplate = (args)=><LeftAlignedTimelines {...args}></LeftAlignedTimelines>
export const LeftAlignedTimeline = LeftAlignedTimelinesTemplate.bind({});

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

const CustomizedTimelinesTemplate = (args)=><CustomizedTimelines {...args}></CustomizedTimelines>
export const CustomizedTimeline = CustomizedTimelinesTemplate.bind({});
CustomizedTimeline.args = {
  customizedTimelineData: [
    {
      label: "Eat",
      oppositeLabel: "9.00am",
      text: "Because you need strength",
      icon: 'fastfood',
      color: "grey",
      variant: "filled",
    },
    {
      label: "Code",
      oppositeLabel: "10.00am",
      text: "Because it's awesome!",
      icon: 'laptop_mac',
      color: "primary",
      variant: "filled",
    },
    {
      label: "Sleep",
      oppositeLabel: "",
      text: "Because you need rest",
      icon: 'hotel',
      color: "primary",
      variant: "outlined",
    },
    {
      label: "Repeat",
      oppositeLabel: "",
      text: "Because this is the life you love!",
      icon: 'repeat',
      color: "secondary",
      variant: "filled",
    },
  ],
  position: "alternate",
};

