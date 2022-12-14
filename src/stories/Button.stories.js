import {
  Alarm,
  Delete,
  Save,
  Refresh,
  Home,
  Menu,
  Notifications,
} from "@mui/icons-material";
import {
  Button,
  ButtonBasics,
  ButtonColors,
  ButtonHandlingClick,
  ButtonIconLabelButton,
  ButtonLoadings,
  ButtonSizes,
} from "../components/Button";
import 
  SearchIcon
from "../components/search-icons-component"

const iconOptions = [
  "none",
  "delete",
  "alarm",
  "home",
  "menu",
  "save",
  "search",
  "refresh",
  "notification",
];

const iconMapping = {
  delete: <Delete></Delete>,
  save: <Save></Save>,
  refresh: <Refresh></Refresh>,
  home: <Home></Home>,
  menu: <Menu></Menu>,
  alarm: <Alarm></Alarm>,
  search: <SearchIcon></SearchIcon>,
  notification: <Notifications></Notifications>,
  none: null,
};

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
    handleClick: { action: "Clicked" },
    startIcon: {
      options: iconOptions,
      control: { type: "select" },
      mapping: iconMapping,
    },
    endIcon: {
      options: iconOptions,
      control: { type: "select" },
      mapping: iconMapping,
    },
  },
};

const ButtonDefaultTemplate = (args) => {
  const { label, ...argsList } = args;
  return <Button {...argsList}>{label}</Button>;
};

export const ButtonPlayground = ButtonDefaultTemplate.bind({});
ButtonPlayground.parameters = {
  controls: { exclude: ["direction", "children", "handleClick"] },
};
ButtonPlayground.args = {
  label: "Button",
  variant: "contained",
  color: "primary",
  size: "medium",
  disabled: false
};

export const ButtonVariants = ButtonBasics.bind({});
ButtonVariants.parameters = {
  controls: { include: ["color", "size", "direction"] },
};
ButtonVariants.args = {
  label: "Button",
  color: "primary",
  size: "medium",
  direction: "row"
};

export const ButtonHandlingClicks = ButtonHandlingClick.bind({});
ButtonHandlingClicks.parameters = {
  controls: { include: ["label", "color", "size", "variant", "startIcon", "endIcon"] },
};
ButtonHandlingClicks.args = {
  label: "Click me",
  color: "primary",
  size: "medium"
};

export const ButtonColor = ButtonColors.bind({});
ButtonColor.parameters = {
  controls: { include: ["color", "size", "direction"] },
};
ButtonColor.args = {
  children: "Button",
  color: "primary",
  size: "medium",
  direction: "row"
};

export const ButtonSize = ButtonSizes.bind({});

export const ButtonIconLabelButtons = ButtonIconLabelButton.bind({});

export const ButtonLoading = ButtonLoadings.bind({});
ButtonLoading.args = {
  children: "Submit",
  variant: "outlined",
  loading: true,
};
