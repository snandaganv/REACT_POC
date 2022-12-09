import {
  DefaultCircularProgresses,
  CircularProgressWithValueLabels,
  CircularProgressIntegrations,
  DefaultLinearProgresses,
  LinearProgressWithValueLabels,
  LinearBufferProgresses,
} from "../components/progress-component";
import SaveIcon from "@mui/icons-material/Save";
import { CircularProgress, LinearProgress } from "@mui/material";

export default {
  title: "FeedBack/Progress",
  component: CircularProgress,
  argTypes: {
    color: {
      options: ["primary", "secondary", "error", "info", "success", "warning"],
      control: { type: "radio" },
    },
    variant: {
      options: ["determinate", "indeterminate", "buffer", "query"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => (
  <DefaultCircularProgresses {...args}></DefaultCircularProgresses>
);
export const DefaultCircularProgress = Template.bind({});
DefaultCircularProgress.args = {
  color: "primary",
  disableShrink: false,
  variant: "indeterminate",
  value: 50,
};

const Template1 = (args) => (
  <CircularProgressWithValueLabels {...args}></CircularProgressWithValueLabels>
);

const HowToConsumeProgressComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Circular Progress and Linear Progress
      component ,just pass in the props when using the component .
    </code>
    <br />
    <br />
    <code>
      import {"{DefaultCircularProgresses}"} from "@arisglobal/agcp-ui" ;
    </code>
    <br />
    <code>
      import {"{DefaultLinearProgresses}"} from "@arisglobal/agcp-ui" ;
    </code>
    <br />
    <br />
    <code>
      &lt;DefaultCircularProgresses&gt;&lt;/DefaultCircularProgresses&gt;
    </code>
    <br />
    <code>&lt;DefaultLinearProgresses&gt;&lt;/DefaultLinearProgresses&gt;</code>
  </div>
);
const TemplateDiscription = (args) => (
  <HowToConsumeProgressComponent {...args}></HowToConsumeProgressComponent>
);
export const HowToConsumeProgressComponents = TemplateDiscription.bind({});
export const CircularProgressWithValueLabel = Template1.bind({});
CircularProgressWithValueLabel.args = {
  time: 800,
  steps: 10,
  color: "primary",
};

const Template2 = (args) => (
  <CircularProgressIntegrations {...args}></CircularProgressIntegrations>
);
export const CircularProgressIntegration = Template2.bind({});
CircularProgressIntegration.args = {
  icon: <SaveIcon />,
  label: "Save",
  color: "primary",
};

const Template3 = (args) => (
  <DefaultLinearProgresses {...args}></DefaultLinearProgresses>
);
export const DefaultLinearProgress = Template3.bind({});
DefaultLinearProgress.args = {
  color: "primary",
  variant: "indeterminate",
  value: 50,
};

const Template4 = (args) => (
  <LinearProgressWithValueLabels {...args}></LinearProgressWithValueLabels>
);
export const LinearProgressWithValueLabel = Template4.bind({});
LinearProgressWithValueLabel.args = {
  time: 800,
  steps: 10,
  color: "primary",
};

const Template5 = (args) => (
  <LinearBufferProgresses {...args}></LinearBufferProgresses>
);
export const LinearBufferProgress = Template5.bind({});
LinearBufferProgress.args = {
  color: "primary",
  variant: "buffer",
};
