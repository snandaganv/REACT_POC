import { Button } from "@mui/material";
import {
  Defaults,
  Basics,
  HandingClick,
  Colors,
  Sizes,
  IconLabelButton,
  Loadings,
} from "../components/Button";

export default {
  title: "Input/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
    direction: {
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: { type: "radio" },
    },
  },
};

export const Default = Defaults.bind({});
Default.args = {
  label: "Button",
  variant: "contained",
  color: "primary",
  size: "medium",
  direction: "row",
};

export const BasicButton = Basics.bind({});

export const HandingClicks = HandingClick.bind({});

export const Color = Colors.bind({});

export const Size = Sizes.bind({});

export const IconLabelButtons = IconLabelButton.bind({});

export const LoadingButtons = Loadings.bind({});
