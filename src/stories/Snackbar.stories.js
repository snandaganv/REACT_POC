import { Snackbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  SnackbarBasic,
  SnackbarAlert,
  SnackbarPositioned,
  SnackbarMessageLength,
  SnackbarTransition,
  SnackbarFloatingsActionButtons,
} from "../components/Snackbar";

export default {
  title: "Feedback/Snackbar",
  component: Snackbar,
  argTypes: {
    severity: {
      options: ["success", "error", "info", "warning"],
      control: { type: "radio" },
    },
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <SnackbarBasic {...args}></SnackbarBasic>;

export const SnackbarBasics = Template.bind({});
SnackbarBasics.args = {
  snackLabel: "UNDO",
  message: "Note archived ",
  textLabel: "Open simple snackbar",
  autoHideDuration: 9000,
  anchorOrigin: { vertical: "bottom", horizontal: "left" },
};

const HowToConsumeSnackbarComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Circular Snackbar component ,just pass
      in the props when using the component .
    </code>
    <br />
    <br />
    <code>import {"{SnackbarBasic}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>&lt;SnackbarBasic {"{...props}"}&gt;&lt;/SnackbarBasic&gt;</code>
  </div>
);
const TemplateDiscription = (args) => (
  <HowToConsumeSnackbarComponent {...args}></HowToConsumeSnackbarComponent>
);
export const HowToConsumeSnackbarComponents = TemplateDiscription.bind({});

const Template1 = (args) => <SnackbarAlert {...args}></SnackbarAlert>;

export const SnackbarAlerts = Template1.bind({});
SnackbarAlerts.args = {
  severity: "success",
  alertMessage: "This is a success message!",
  variant: "outlined",
  buttonLabel: "Open success snackbar",
  autoHideDuration: 6000,
};

const Template2 = (args) => <SnackbarPositioned {...args}></SnackbarPositioned>;

export const SnackbarPositions = Template2.bind({});
const Template3 = (args) => (
  <SnackbarMessageLength {...args}></SnackbarMessageLength>
);
const Template4 = (args) => <SnackbarTransition {...args}></SnackbarTransition>;
const Template5 = (args) => (
  <SnackbarFloatingsActionButtons {...args}></SnackbarFloatingsActionButtons>
);
export const SnackbarMessageLengths = Template3.bind({});
export const SnackbarTransitions = Template4.bind({});
export const SnackbarFloatingActionButton = Template5.bind({});
SnackbarFloatingActionButton.args = {
  icons: <AddIcon />,
  color: "primary",
  message: "Note archived",
  snackLabel: "UNDO",
  autoHideDuration: 9000,
};
