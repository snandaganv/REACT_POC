import React from "react";
import { BackdropDefaults } from "../components/backdrop-component";

import { Backdrop } from "@mui/material";

export default {
  title: "Feedback/Backdrop",
  component: BackdropDefaults,
  argTypes: {
    // variant: {
    //   options: ["contained", "outlined", "text"],
    //   control: { type: "radio" },
    // },
    // size: {
    //   options: ["small", "medium", "large"],
    //   control: { type: "radio" },
    // },
    color: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

export const BackdropDefault = BackdropDefaults.bind({});
BackdropDefault.args = {
  label: "Show Backdrop",
  // variant: "text",
  // size: "large",
  // buttoncolor: "primary",
  color: "secondary",
  invisible: false,
};
