import TabsComponent from "../components/tabs-component";

export default {
  title: "Feedback/Tabs",
  component: TabsComponent,
  argTypes: {
    children: [],
    indicatorColor: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    allowScrollButtonsMobile: false,
    onChange: {
      action: "change",
    },
    centered: false,
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    textColor: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <TabsComponent {...args}></TabsComponent>;

export const Default = Template.bind({});

Default.args = {
  indicatorColor: "primary",
  allowScrollButtonsMobile: true,
  ariaLabel: "Story book Tabs",
  centered: false,
  orientation: "horizontal",
  textColor: "primary",
  tabsArray: [
    { index: 0, label: "Item First", icon: "home_icon", position: "start" },
    { index: 1, label: "Item Second", icon: "star_icon", position: "start" },
    {
      index: 2,
      label: "Item Third",
      icon: "calendar_view_day",
      position: "bottom",
    },
  ],
  scrollButtons: "auto",
  variant: "scrollable",
};

const HowToConsumeTabComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Circular Tab component ,just pass in
      the props when using the component .
    </code>
    <br />
    <br />
    <code>import {"{TabsComponent}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>&lt;TabsComponent {"{...props}"}&gt;&lt;/TabsComponent&gt;</code>
  </div>
);
const TemplateDiscription = (args) => (
  <HowToConsumeTabComponent {...args}></HowToConsumeTabComponent>
);
export const HowToConsumeTabComponents = TemplateDiscription.bind({});
