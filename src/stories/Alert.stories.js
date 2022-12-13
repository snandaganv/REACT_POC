import AlertComponent from "../components/alert-component";

export default {
  title: "Feedback/Alert",
  component: AlertComponent,
  argTypes: {
    closeText: "",
    variant: {
      options: ["outlined", "filled", "standard"],
      control: { type: "radio" },
    },
    severity: {
      options: ["success", "error", "info", "warning"],
      control: { type: "radio" },
    },
    onClose: { action: "closed" },
    children: [],
  },
  parameters: {
    backgrounds: {
      default: "Light Theme",
      values: [{ name: "Dark Theme", value: "#656B73" }],
    },
  },
};

const Template = (args) => (
  <AlertComponent {...args}>{args.children}</AlertComponent>
);

export const Default = Template.bind({});

Default.args = {
  closeText: "Close",
  children: "I am an alert",
  titleText: "",
};

const HowToConsumeAlertComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Alert component ,just pass in the props
      when using the component .
    </code>
    <br />
    <br />
    <code>import {"{AlertComponent}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>
      &lt;AlertComponent {"{...props}"}
      &gt; I am an alert &lt;/AlertComponent&gt;
    </code>
  </div>
);
const TemplateDemo = (args) => (
  <HowToConsumeAlertComponent {...args}></HowToConsumeAlertComponent>
);
export const HowToConsumeAlertComponents = TemplateDemo.bind({});
