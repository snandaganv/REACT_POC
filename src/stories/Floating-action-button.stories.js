import {
  FloatingActionButtons,
  Fabs,
  FloatingActionButtonSize,
  FloatingActionButtonExtendedSize,
  FloatingActionButtonZoom,
} from "../components/fab-component";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab } from "@mui/material";

export default {
  title: "Input/Floating Action Button",
  component: Fab,
  argTypes: {
    color: {
      options: [
        "default",
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    onClick: { action: "Clicked" },
  },
};

export const DefaultFloatingActionButtonCircle = Fabs.bind({});
DefaultFloatingActionButtonCircle.args = {
  color: "default",
  variant: "circular",
  size: "medium",
  disabled: false,
  disableRipple: false,
  href: "",
  icons: <AddIcon />,
};
export const DefaultFloatingActionButtonExtended = Fabs.bind({});
DefaultFloatingActionButtonExtended.args = {
  color: "default",
  variant: "extended",
  size: "medium",
  disabled: false,
  disableRipple: false,
  href: "",
  icons: <AddIcon />,
  label: "Fab",
};

export const BasicFloatingActionButton = FloatingActionButtons.bind({});
export const FloatingActionButtonSizes = FloatingActionButtonSize.bind({});
export const FloatingActionButtonExtendedSizes =
  FloatingActionButtonExtendedSize.bind({});

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const boxStyle = {
  bgcolor: "background.paper",
  width: 500,
  position: "relative",
  minHeight: 200,
};

export const FloatingActionButtonAnimation = FloatingActionButtonZoom.bind({});
FloatingActionButtonAnimation.args = {
  tabsArray: [
    {
      index: 0,
      label: "Item First",
      content: "Content First",
      color: "primary",
      sx: fabStyle,
      icon: <AddIcon />,
    },
    {
      index: 1,
      label: "Item Second",
      content: "Content Second",
      color: "secondary",
      sx: fabStyle,
      icon: <EditIcon />,
    },
    {
      index: 2,
      label: "Item Third",
      content: "Content Third",
      color: "error",
      sx: fabStyle,
      icon: <UpIcon />,
    },
  ],
  boxHeight: 200,
  boxWidth: 500,
  bgcolor: "background.paper",
};
