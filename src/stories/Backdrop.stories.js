import React from "react";
import BackdropComponent from "../components/backdrop-component";
import { Backdrop } from "@mui/material";

export default {
  title: "Feedback/Backdrop",
  component: BackdropComponent,
  argTypes: {},
};

const Template = (args) => <BackdropComponent {...args}></BackdropComponent>;
export const Default = Template.bind({});
Default.args = {
  label: "Show Backdrop",
  invisible: false,
};
