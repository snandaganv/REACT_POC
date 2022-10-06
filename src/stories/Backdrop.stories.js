import React from "react";
import { BackdropDefaults } from "../components/backdrop-component";

import { Backdrop } from "@mui/material";

export default {
  title: "Feedback/Backdrop",
  component: BackdropDefaults,
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    buttoncolor: {
      options: ["primary", "secondary", "success", "error", "info", "warning"],
      control: { type: "radio" },
    },
  },
};

export const BackdropDefault = BackdropDefaults.bind({});
BackdropDefault.args = {
  label: "Show Backdrop",
  variant: "text",
  size: "large",
  buttoncolor: "primary",
  color: "#fff",
  invisible: false,
};
