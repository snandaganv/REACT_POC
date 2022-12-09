import AvatarComponent from "../components/avatar-component";

export default {
  title: "Data Display/Avatar",
  component: AvatarComponent,
  argTypes: {
    type: {
      options: ["text", "image"],
      control: { type: "radio" },
    },
    variant: {
      options: ["circular", "rounded", "square"],
      control: { type: "radio" },
    },
    sizes: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <AvatarComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  avatarText: "Software Tester",
  src: "",
  sizes: "small",
};

const HowToConsumeAvatarComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Avatar component ,just pass in the
      props when using the component .
    </code>
    <br />
    <br />
    <code>import {"{AvatarComponent}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>
      &lt;AvatarComponent {"{...props}"}&gt;&lt;/AvatarComponent&gt;
    </code>
  </div>
);
const TemplateDiscription = (args) => (
  <HowToConsumeAvatarComponent {...args}></HowToConsumeAvatarComponent>
);
export const HowToConsumeAvatarComponents = TemplateDiscription.bind({});
