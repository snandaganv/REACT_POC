import { Alarm, Delete, Home, Menu } from "@mui/icons-material";
import {
  Button,
  ButtonBasics,
  ButtonColors,
  ButtonHandlingClick,
  ButtonIconExamples,
  ButtonIconLabelButton,
  ButtonLoadings,
  ButtonSizes,
  IconButton,
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

    icon: {
      options: ["delete", "alarm", "home", "menu"],
      control: { type: "radio" },
      mapping: {
        delete: <Delete></Delete>,
        home: <Home></Home>,
        menu: <Menu></Menu>,
        alarm: <Alarm></Alarm>,
      },
    },
  },
};

const ButtonDefaultTemplate = (args) => {
  const { icon, ...argsList } = args;
  return (
    <Button {...argsList} startIcon={icon}>
      {args.children}
    </Button>
  );
};

export const ButtonDef = ButtonDefaultTemplate.bind({});
ButtonDef.args = {
  children: "Button",
  variant: "contained",
  color: "primary",
  size: "medium",
  direction: "row",
  disabled: false,
  icon: "delete",
};

export const ButtonBasic = ButtonBasics.bind({});

export const ButtonHandlingClicks = ButtonHandlingClick.bind({});

export const ButtonColor = ButtonColors.bind({});

export const ButtonSize = ButtonSizes.bind({});

const ButtonIconTemplate = (args) => {
  const { icon, ...argList } = args;
  return <IconButton {...argList}>{icon}</IconButton>;
};

export const ButtonIcons = ButtonIconTemplate.bind({});
ButtonIcons.args = {
  color: "primary",
  icon: "alarm",
};

export const ButtonIconBasic = ButtonIconExamples.bind({});

export const ButtonIconLabelButtons = ButtonIconLabelButton.bind({});

export const ButtonLoading = ButtonLoadings.bind({});
ButtonLoading.args = {
  children: "Submit",
  variant: "outlined",
  loading: true,
};
