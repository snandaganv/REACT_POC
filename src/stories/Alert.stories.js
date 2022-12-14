import { Alert, AlertTitle } from "../components/alert-component";
import { Button } from "../components/Button";

export default {
  title: "Feedback/Alert",
  component: Alert,
  argTypes: {
    actionButtonLabel: "UNDO",
    variant: {
      options: ["outlined", "filled", "standard"],
      control: { type: "radio" },
    },
    severity: {
      options: ["success", "error", "info", "warning"],
      control: { type: "radio" },
    },
    onClose: { action: "Closed" },
    children: [],
  },
  parameters: {
    backgrounds: {
      default: "Light Theme",
      values: [{ name: "Dark Theme", value: "#656B73" }],
    },
  },
};

const AlertTemplate = (args) => {
  const { children, ...otherArgs } = args;
  return <Alert {...otherArgs}>{children}</Alert>;
};

export const AlertPlayground = AlertTemplate.bind({});

AlertPlayground.args = {
  onClose: () => {},
  children: "This is a success alert",
};

const AlertActionButtonTemplate = (args) => {
  const { alertText, actionButtonLabel, ...otherArgs } = args;
  return (
    <Alert
      {...otherArgs}
      action={
        <Button color="inherit" size="small">
          {actionButtonLabel}
        </Button>
      }
    >
      {alertText}
    </Alert>
  );
};

export const AlertWithActionButton = AlertActionButtonTemplate.bind({});

AlertWithActionButton.args = {
  actionButtonLabel: "Retry",
  severity: "error",
  onClose: () => {},
  alertText: "Problem occurred during upload.",
};

const AlertDescriptionTemplate = (args) => {
  const { alertTitle, alertText, boldAlertText, ...otherArgs } = args;
  return (
    <Alert {...otherArgs}>
      <AlertTitle>{alertTitle}</AlertTitle>
      {alertText} {boldAlertText && (<strong>{boldAlertText}</strong>)}
    </Alert>
  );
};

export const AlertWithDescription = AlertDescriptionTemplate.bind({});

AlertWithDescription.args = {
  severity: "warning",
  alertTitle: "Warning",
  alertText: "Your input is invalid.",
  boldAlertText: "Please enter a valid input."
};
