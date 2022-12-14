import {
  Alarm,
  Delete,
  Save,
  Refresh,
  Home,
  Menu,
  Notifications,
  AddShoppingCart,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import { IconButton } from "../components/IconButton";

const iconOptions = [
  "none",
  "delete",
  "alarm",
  "home",
  "menu",
  "save",
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
  notification: <Notifications></Notifications>,
  none: null,
};

export default {
  title: "Input/IconButton",
  component: IconButton,
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
    icon: {
      options: iconOptions,
      control: { type: "select" },
      mapping: iconMapping,
    },
  },
};

const IconButtonTemplate = (args) => {
  const { icon, ...argList } = args;
  return <IconButton {...argList}>{icon}</IconButton>;
};

export const IconButtonPlayground = IconButtonTemplate.bind({});
IconButtonPlayground.parameters = {
  controls: { exclude: ["direction", "handleClick", "variant"] },
};
IconButtonPlayground.args = {
  size: "medium",
  color: "success",
  icon: "alarm",
};

export const ButtonIconExamples = ({ disabled }) => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <Delete />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <Delete />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <Alarm />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCart />
      </IconButton>
    </Stack>
  );
};

export const ButtonIconBasic = ButtonIconExamples.bind({});
