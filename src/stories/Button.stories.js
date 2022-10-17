import { Button } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { Alarm } from "@mui/icons-material";
import {
  ButtonDefaults,
  ButtonBasics,
  ButtonHandingClick,
  ButtonColors,
  ButtonSizes,
  ButtonIcon,
  ButtonIconExamples,
  ButtonIconLabelButton,
  ButtonLoadings,
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
    onClick: { action: "Clicked" },
  },
};

export const ButtonDefault = ButtonDefaults.bind({});
ButtonDefault.args = {
  children: "Button",
  variant: "contained",
  color: "primary",
  size: "medium",
  direction: "row",
  disabled: false,
  startIcon: <Delete />,
};

export const ButtonBasic = ButtonBasics.bind({});

export const ButtonHandingClicks = ButtonHandingClick.bind({});

export const ButtonColor = ButtonColors.bind({});

export const ButtonSize = ButtonSizes.bind({});

export const ButtonIcons = ButtonIcon.bind({});
ButtonIcons.args = {
  color: "primary",
  icon: <Alarm />,
};

export const ButtonIconBasic = ButtonIconExamples.bind({});

export const ButtonIconLabelButtons = ButtonIconLabelButton.bind({});

export const ButtonLoading = ButtonLoadings.bind({});
ButtonLoading.args = {
  children: "Submit",
  variant: "outlined",
  loading: true,
};
