import { Snackbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  SnackbarAlert,
  SnackbarPositioned,
  SnackbarMessageLength,
  SnackbarTransition,
  SnackbarFloatingsActionButtons,
  SnackbarPlayground,
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

const Template = (args) => SnackbarPlayground({...args});

export const SnackbarBasics = Template.bind({});
SnackbarBasics.args = {
  snackLabel: "UNDO",
  message: "Note archived ",
  textLabel: "Open simple snackbar",
  autoHideDuration: 9000,
  anchorOrigin: { vertical: "bottom", horizontal: "left" },
};

const Template1 = (args) => SnackbarAlert({ ...args });

export const SnackbarAlerts = Template1.bind({});
SnackbarAlerts.args = {
  severity: "success",
  alertMessage: "This is a success message!",
  variant: "outlined",
  buttonLabel: "Open success snackbar",
  autoHideDuration: 6000,
};
SnackbarAlerts.parameters = {
  docs: {
    source: {
      code: `const SnackAlert = React.forwardRef(function SnackAlert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

const [open, setOpen] = React.useState(false);

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpen(false);
};
return (
  <Stack spacing={2} sx={{ width: "100%" }}>
    <Button variant={variant} onClick={handleClick}>
      {buttonLabel}
    </Button>
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <SnackAlert
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {alertMessage}
      </SnackAlert>
    </Snackbar>
  </Stack>
);`,
      language: "jsx",
      type: "auto",
      format: true,
    },
  },
};

const Template2 = (args) => SnackbarPositioned({ ...args });

export const SnackbarPositions = Template2.bind({});
const Template3 = (args) => SnackbarMessageLength({ ...args });
const Template4 = (args) => SnackbarTransition({ ...args });
const Template5 = (args) => SnackbarFloatingsActionButtons({ ...args });
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
