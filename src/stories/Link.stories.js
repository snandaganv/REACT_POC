import LinkComponent from "../components/link-component";

export default {
  title: "Feedback/Link",
  component: LinkComponent,
  argTypes: {
    children: [],
    color: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },

    underline: {
      options: ["always", "hover", "none"],
      control: { type: "radio" },
    },
    variant: {
      options: [
        "body1",
        "body2",
        "button",
        "caption",
        "inherit",
        "overline",
        "subtitle1",
        "subtitle2",
      ],
      control: { type: "radio" },
    },
    href: "",
  },
};

const Template = (args) => (
  <LinkComponent {...args}>{args.children}</LinkComponent>
);

export const Default = Template.bind({});

Default.args = {
  color: "primary",
  children: "I am an Link",
  href: "",
  variant: "body1",
};

const HowToConsumeLinkComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Link component ,just pass in the props
      when using the component .
    </code>
    <br />
    <br />
    <code>import {"{LinkComponent}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>
      &lt;LinkComponent color="primary"&gt;I am an Link&lt;/LinkComponent&gt;
    </code>
  </div>
);
const TemplateDemo = (args) => (
  <HowToConsumeLinkComponent {...args}></HowToConsumeLinkComponent>
);
export const HowToConsumeLinkComponents = TemplateDemo.bind({});
