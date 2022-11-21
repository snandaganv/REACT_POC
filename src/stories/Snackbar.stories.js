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

export const SnackbarBasics = SnackbarBasic.bind({});
SnackbarBasics.args = {
  snackLabel: "UNDO",
  message: "Note archived ",
  textLabel: "Open simple snackbar",
  autoHideDuration: 9000,
  anchorOrigin: { vertical: "bottom", horizontal: "left" },
};
export const SnackbarAlerts = SnackbarAlert.bind({});
SnackbarAlerts.args = {
  severity: "success",
  alertMessage: "This is a success message!",
  variant: "outlined",
  buttonLabel: "Open success snackbar",
  autoHideDuration: 6000,
};
export const SnackbarPositions = SnackbarPositioned.bind({});
export const SnackbarMessageLengths = SnackbarMessageLength.bind({});
export const SnackbarTransitions = SnackbarTransition.bind({});
export const SnackbarFloatingActionButton = SnackbarFloatingsActionButtons.bind(
  {}
);
SnackbarFloatingActionButton.args = {
  icons: <AddIcon />,
  color: "primary",
  message: "Note archived",
  snackLabel: "UNDO",
  autoHideDuration: 9000,
};
