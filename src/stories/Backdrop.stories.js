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
    <code>
      &lt;BackdropDefaults label="Show Backdrop" &gt;&lt;/BackdropDefaults&gt;
    </code>
  </div>
);
const TemplateDemo = (args) => (
  <HowToConsumeBackdropComponent {...args}></HowToConsumeBackdropComponent>
);
export const HowToConsumeBackdropComponents = TemplateDemo.bind({});
