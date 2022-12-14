import React from "react";
import { BackdropBasics, BackdropButtons } from "../components/backdrop-component";
import Backdrop from "@mui/material/Backdrop";
export default {
  title: "Feedback/Backdrop",
  component: Backdrop,
  argTypes: {},
};

const Template1 = (args) => <BackdropBasics {...args}></BackdropBasics>;
export const BackdropBasic = Template1.bind({});
BackdropBasic.args = {
  invisible: false,
  open: true,
};
const Template = (args) => <BackdropButtons {...args}></BackdropButtons>;
export const BackdropButton = Template.bind({});
BackdropButton.args = {
  label: "Show Backdrop",
  invisible: false,
};

const HowToConsumeBackdropComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Backdrop component ,just pass in the
      props when using the component .
    </code>
    <br />
    <br />
    <code>import {"{BackdropDefault}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>&lt;BackdropDefault &gt;&lt;/BackdropDefault&gt;</code>
  </div>
);
const TemplateDemo = (args) => (
  <HowToConsumeBackdropComponent {...args}></HowToConsumeBackdropComponent>
);
export const HowToConsumeBackdropComponents = TemplateDemo.bind({});
