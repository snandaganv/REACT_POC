import { Stepper } from "@mui/material";
import {
  Steppercomponent,
  HorizontalNonLinearSteppers,
  AlternativeLabel,
  HorizontalStepperWithErrors,
  VerticalLinearStepper,
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

export const DefaultStepper = Steppercomponent.bind({});
DefaultStepper.args = {
  orientation: "horizontal",
  numberOfSteps: ["Step 1", "Step 2", "Step 3"],
};

export const HorizontalLinearStepper = HorizontalLinearSteppers.bind({});
HorizontalLinearStepper.args = {
  numberOfSteps: ["Step 1", "Step 2", "Step 3"],
};
export const HorizontalNonLinearStepper = HorizontalNonLinearSteppers.bind({});
HorizontalNonLinearStepper.args = {
  nonLinear: true,
  numberOfSteps: ["Step 1", "Step 2", "Step 3"],
};

export const AlternativeLabelStepper = AlternativeLabel.bind({});
AlternativeLabelStepper.args = {
  alternativeLabel: true,
  numberOfSteps: ["Step 1", "Step 2", "Step 3"],
};

export const VerticalStepper = VerticalLinearStepper.bind({});
VerticalStepper.args = {
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
export const ErrorStepper = HorizontalStepperWithErrors.bind({});
ErrorStepper.args = {
  numberOfSteps: ["Step 1", "Step 2", "Step 3"],
  errorstepnumber: 3,
};
export const TextMobileStepper = TextMobileSteppers.bind({});
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

export const DotsAndProgressStepper = DotsAndProgressMobileSteppers.bind({});
DotsAndProgressStepper.args = {
  numberOfSteps: 4,
  variant: "dots",
};

export const customizedStepper = CustomizedSteppers.bind({});
customizedStepper.args = {
  numberOfSteps: ["Step 1", "Step 2", "Step 3"],
};

export const CustomizedIconStepper = CustomizedIconSteppers.bind({});
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
