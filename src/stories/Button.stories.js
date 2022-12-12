import { Delete, Alarm, Menu, Home } from "@mui/icons-material";
import {
  ButtonDefault as ButtonComponent,
  ButtonBasics,
  ButtonHandlingClick,
  ButtonColors,
  ButtonSizes,
  ButtonIconExamples,
  ButtonIconLabelButton,
  ButtonLoadings,
  IconButtonDefault,
} from "../components/Button";

export default {
  title: "Input/Button",
  component: ButtonComponent,
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
    <ButtonComponent {...argsList} startIcon={icon}>
      {args.children}
    </ButtonComponent>
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
  return <IconButtonDefault {...argList}>{icon}</IconButtonDefault>;
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
