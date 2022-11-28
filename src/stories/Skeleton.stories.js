import { Skeleton } from "@mui/material";
import React from "react";
import {
  SkeletonPulsateExamples,
  SkeletonDefaults,
  SkeletonsAnimations,
  SkeletonsVariants,
  SkeletonWaveExamples,
} from "../components/skeleton-component";

export default {
  title: "Feedback/Skeleton",
  component: Skeleton,
  argTypes: {
    variant: {
      options: ["text", "rectangle", "rounded", "circular"],
      control: { type: "radio" },
    },
    animation: {
      options: ["pulse", "wave", false],
      control: { type: "radio" },
    },
  },
};
const Template = (args) => (
  <SkeletonDefaults {...args}>{args.children}</SkeletonDefaults>
);

export const SkeletonDefault = Template.bind({});
SkeletonDefault.args = {
  variant: "text",
  width: 400,
  height: 15,
  animation: "pulse",
};

const VariantsTemplate = (args) => (
  <SkeletonsVariants {...args}></SkeletonsVariants>
);

export const SkeletonVariants = VariantsTemplate.bind({});
SkeletonVariants.args = {
  skeletonData: [
    { variant: "text", width: 900, height: 20 },
    { variant: "circular", width: 40, height: 40 },
    { variant: "rectangular", width: 210, height: 60 },
    { variant: "rounded", width: 210, height: 60 },
  ],
};
const AnimationTemplate = (args) => (
  <SkeletonsAnimations {...args}></SkeletonsAnimations>
);

export const SkeletonAnimations = AnimationTemplate.bind({});
SkeletonAnimations.args = {
  skeletonData: [
    { variant: "text", animation: "pulse", width: 400, height: 20 },
    { variant: "text", animation: "wave", width: 400, height: 20 },
    { variant: "text", animation: false, width: 400, height: 20 },
  ],
};
const PulsateExampleTemplate = (args) => (
  <SkeletonPulsateExamples {...args}></SkeletonPulsateExamples>
);

export const SkeletonPulsateExample = PulsateExampleTemplate.bind({});
SkeletonPulsateExample.args = {
  loading: true,
  data: [
    {
      src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
      title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
      channel: "Don Diablo",
      views: "396k views",
      createdAt: "a week ago",
    },
    {
      src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
      title: "Queen - Greatest Hits",
      channel: "Queen Official",
      views: "40M views",
      createdAt: "3 years ago",
    },
    {
      src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
      title: "Calvin Harris, Sam Smith - Promises (Official Video)",
      channel: "Calvin Harris",
      views: "130M views",
      createdAt: "10 months ago",
    },
  ],
  animation: "pulse",
};

const WaveExampleTemplate = (args) => (
  <SkeletonWaveExamples {...args}></SkeletonWaveExamples>
);

export const SkeletonWaveExample = WaveExampleTemplate.bind({});
