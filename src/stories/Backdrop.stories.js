import React from "react";
import { BackdropDefaults } from "../components/backdrop-component";
export default {
  title: "Feedback/Backdrop",
  component: BackdropDefaults,
  argTypes: {},
};

const Template = (args) => <BackdropDefaults {...args}></BackdropDefaults>;
export const BackdropDefault = Template.bind({});
BackdropDefault.args = {
  label: "Show Backdrop",
  invisible: false,
};
