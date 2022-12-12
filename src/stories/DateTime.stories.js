import DateTimeComponent from "../components/datetime-component";

export default {
  title: "Feedback/DateTimeComponent",
  component: DateTimeComponent,
  argTypes: {
    variant: {
      options: ["dateonly", "datetime", "timeonly", "calendar"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <DateTimeComponent {...args}></DateTimeComponent>;

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  disableFuture: false,
  disableHighlightToday: false,
  disableMaskedInput: false,
  disableOpenPicker: false,
  disablePast: false,
  maxDate: "",
  minDate: "",
  open: false,
  orientation: "landscape",
  openTo: "day",
  readOnly: false,
  views: ["year", "day"],
  label: "Basic Exampe",
  variant: "dateonly",
  ampm: false,
  ampmInClock: false,
  disableIgnoringDatePartForTimeValidation: false,
  minTime: "",
  maxTime: "",
  minutesStep: 1,
  calendarr: 1,
};

const HowToConsumeDateTimeComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI DateTime component ,just pass in the
      props when using the component .
    </code>
    <br />
    <br />
    <code>import {"{DateTimeComponent}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>
      &lt;DateTimeComponent {"{...props}"}&gt;&lt;/DateTimeComponent&gt;
    </code>
  </div>
);
const TemplateDemo = (args) => (
  <HowToConsumeDateTimeComponent {...args}></HowToConsumeDateTimeComponent>
);
export const HowToConsumeDateTimeComponents = TemplateDemo.bind({});
