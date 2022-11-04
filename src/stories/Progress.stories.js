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

export const DefaultCircularProgress = DefaultCircularProgresses.bind({});
DefaultCircularProgress.args = {
  color: "primary",
  disableShrink: false,
  variant: "indeterminate",
  value: 50,
};

export const CircularProgressWithValueLabel =
  CircularProgressWithValueLabels.bind({});
CircularProgressWithValueLabel.args = {
  time: 800,
  steps: 10,
  color: "primary",
};
export const CircularProgressIntegration = CircularProgressIntegrations.bind(
  {}
);
CircularProgressIntegration.args = {
  icon: <SaveIcon />,
  label: "Save",
  color: "primary",
};

export const DefaultLinearProgress = DefaultLinearProgresses.bind({});
DefaultLinearProgress.args = {
  color: "primary",
  variant: "indeterminate",
  value: 50,
};

export const LinearProgressWithValueLabel = LinearProgressWithValueLabels.bind(
  {}
);
LinearProgressWithValueLabel.args = {
  time: 800,
  steps: 10,
  color: "primary",
};

export const LinearBufferProgress = LinearBufferProgresses.bind({});
LinearBufferProgress.args = {
  color: "primary",
  variant: "buffer",
};
