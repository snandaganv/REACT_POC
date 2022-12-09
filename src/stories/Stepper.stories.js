import { Stepper } from "@mui/material";
import {
  DefaultSteppers,
  HorizontalNonLinearSteppers,
  AlternativeLabelSteppers,
  HorizontalStepperWithErrors,
  VerticalLinearSteppers,
  TextMobileSteppers,
  DotsAndProgressMobileSteppers,
  HorizontalLinearSteppers,
  CustomizedSteppers,
  CustomizedIconSteppers,
} from "../components/stepper-component";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";

export default {
  title: "Navigation/Stepper",
  component: Stepper,
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    variant: {
      options: ["dots", "progress"],
      control: { type: "radio" },
    },
  },
};
const Template2 = (args) => <DefaultSteppers {...args}></DefaultSteppers>;
export const DefaultStepper = Template2.bind({});
DefaultStepper.args = {
  orientation: "horizontal",
  numberOfSteps: ["Step 1", "Step 2", "Step 3"],
};

const Template3 = (args) => <HorizontalLinearSteppers {...args}></HorizontalLinearSteppers>;
export const HorizontalLinearStepper = Template3.bind({});
HorizontalLinearStepper.args = {
  numberOfSteps: ["Step 1", "Step 2", "Step 3"],
};
const Template4 = (args) => <HorizontalNonLinearSteppers {...args}></HorizontalNonLinearSteppers>;
export const HorizontalNonLinearStepper = Template4.bind({});
HorizontalNonLinearStepper.args = {
  nonLinear: true,
  numberOfSteps: ["Step 1", "Step 2", "Step 3"],
};
const Template5 = (args) => <AlternativeLabelSteppers {...args}></AlternativeLabelSteppers>;
export const AlternativeLabelStepper = Template5.bind({});
AlternativeLabelStepper.args = {
  alternativeLabel: true,
  numberOfSteps: ["Step 1", "Step 2", "Step 3"],
};
const Template6 = (args) => <VerticalLinearSteppers {...args}></VerticalLinearSteppers>;
export const VerticalLinearStepper = Template6.bind({});
VerticalLinearStepper.args = {
  versteps: [
    {
      label: "Select campaign settings",
      description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Create an ad",
      description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
  ],
};
const Template7 = (args) => <HorizontalStepperWithErrors {...args}></HorizontalStepperWithErrors>;
export const HorizontalStepperWithError = Template7.bind({});
HorizontalStepperWithError.args = {
  numberOfSteps: ["Step 1", "Step 2", "Step 3"],
  errorstepnumber: 3,
};
const Template8 = (args) => <TextMobileSteppers {...args}></TextMobileSteppers>;
export const TextMobileStepper = Template8.bind({});
TextMobileStepper.args = {
  numberOfSteps: [
    {
      label: "Select campaign settings",
      description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Create an ad",
      description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
  ],
};
const Template9 = (args) => <DotsAndProgressMobileSteppers {...args}></DotsAndProgressMobileSteppers>;
export const DotsAndProgressMobileStepper = Template9.bind(
  {}
);
DotsAndProgressMobileStepper.args = {
  numberOfSteps: 4,
  variant: "dots",
};
const Template1 = (args) => <CustomizedSteppers {...args}></CustomizedSteppers>;
export const customizedStepper = Template1.bind({});
customizedStepper.args = {
  numberOfSteps: ["Step 1", "Step 2", "Step 3"],
};
const Template = (args) => <CustomizedIconSteppers {...args}></CustomizedIconSteppers>;

export const CustomizedIconStepper = Template.bind({});
CustomizedIconStepper.args = {
  data: [
    {
      index: 0,
      label: "Step 1",
      icon: <SettingsIcon />,
    },
    {
      index: 1,
      label: "Step 2",
      icon: <VideoLabelIcon />,
    },
    {
      index: 2,
      label: "Step 3",
      icon: <GroupAddIcon />,
    },
  ],
};
