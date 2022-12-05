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

const Template = (args) => <DefaultCircularProgresses {...args}></DefaultCircularProgresses>;
export const DefaultCircularProgrs = Template.bind({});
DefaultCircularProgrs.args = {
  color: "primary",
  disableShrink: false,
  variant: "indeterminate",
  value: 50,
};

const Template1 = (args) => <CircularProgressWithValueLabels {...args}></CircularProgressWithValueLabels>;

export const CircularProgressWithValueLabel =
Template1.bind({});
CircularProgressWithValueLabel.args = {
  time: 800,
  steps: 10,
  color: "primary",
};

const Template2 = (args) => <CircularProgressIntegrations {...args}></CircularProgressIntegrations>;
export const CircularProgressIntegration = Template2.bind(
  {}
);
CircularProgressIntegration.args = {
  icon: <SaveIcon />,
  label: "Save",
  color: "primary",
};

const Template3 = (args) => <DefaultLinearProgresses {...args}></DefaultLinearProgresses>;
export const DefaultLinearProgres = Template3.bind({});
DefaultLinearProgres.args = {
  color: "primary",
  variant: "indeterminate",
  value: 50,
};

const Template4 = (args) => <LinearProgressWithValueLabels {...args}></LinearProgressWithValueLabels>;
export const LinearProgressWithValueLabel = Template4.bind(
  {}
);
LinearProgressWithValueLabel.args = {
  time: 800,
  steps: 10,
  color: "primary",
};

const Template5 = (args) => <LinearBufferProgresses {...args}></LinearBufferProgresses>;
export const LinearBufferProgress = Template5.bind({});
LinearBufferProgress.args = {
  color: "primary",
  variant: "buffer",
};
