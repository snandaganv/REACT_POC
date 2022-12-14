import React from "react";
import { BackdropBasics, BackdropButtons } from "../components/backdrop-component";
import Backdrop from "@mui/material/Backdrop";
export default {
  title: "Feedback/Backdrop",
  component: Backdrop,
  argTypes: {},
};

const Template = (args) => <BackdropBasics {...args}></BackdropBasics>;
export const BackdropBasic = Template1.bind({});
BackdropBasic.args = {
  invisible: false,
  open: true,
};

const Template1 = (args) => <BackdropButtons {...args}></BackdropButtons>;
export const BackdropButton = Template1.bind({});
BackdropButton.args = {
  label: "Show Backdrop",
  invisible: false,
};

