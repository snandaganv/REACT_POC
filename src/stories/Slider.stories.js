import SliderComponent from "../components/slider-component";

export default {
  title: "Feedback/Slider",
  component: SliderComponent,
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <SliderComponent {...args}></SliderComponent>;

export const Default = Template.bind({});

Default.args = {
  defaultValue: 14,
  disabled: false,
  disableSwap: false,
  max: 100,
  min: 10,
  name: "test",
  orientation: "horizontal",
  size: "medium",
  step: 5,
  valueLabelDisplay: "auto",
  marks: true,
  range: false,
  rangeValue: [10, 20],
  track: "normal",
};

const HowToConsumeSliderComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Circular Slider component ,just pass in
      the props when using the component .
    </code>
    <br />
    <br />
    <code>import {"{SliderComponent}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>&lt;SliderComponent {"{...props}"}&gt;&lt;/SliderComponent&gt;</code>
  </div>
);
const TemplateDiscription = (args) => (
  <HowToConsumeSliderComponent {...args}></HowToConsumeSliderComponent>
);
export const HowToConsumeSliderComponents = TemplateDiscription.bind({});
