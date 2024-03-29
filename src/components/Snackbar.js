import React from "react";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SnackbarContent from "@mui/material/SnackbarContent";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Grow from "@mui/material/Grow";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../.storybook/muiTheme";

export const SnackbarBasic = ({
  autoHideDuration,
  textLabel,
  snackLabel,
  message,
  anchorOrigin,
}) => {
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

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        {snackLabel}
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <ThemeProvider theme={muiTheme}>
      <Button onClick={handleClick}>{textLabel}</Button>
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        message={message}
        action={action}
        anchorOrigin={anchorOrigin}
      />
    </ThemeProvider>
  );
};

SnackbarBasic.propTypes = {
  children: PropTypes.element,
  action: PropTypes.node,
  autoHideDuration: PropTypes.number,
  resumeHideDuration: PropTypes.number,
  disableWindowBlurListener: PropTypes.bool,
  key: PropTypes.any,
  message: PropTypes.node,
  textLabel: PropTypes.node,
  alertMessage: PropTypes.node,
  snackLabel: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  anchorOrigin: PropTypes.oneOf([
    { horizontal: "center" | "left" | "right", vertical: "bottom" | "top" },
  ]),
  TransitionComponent: PropTypes.oneOf([
    "GrowTransition",
    "Fade",
    "SlideTransition",
  ]),
  color: PropTypes.oneOf([
    "primary",
    "success",
    "secondary",
    "error",
    "info",
    "warning",
  ]),
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
};

export const SnackbarAlert = ({
  alertMessage,
  severity,
  variant,
  buttonLabel,
  autoHideDuration,
}) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
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
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Button variant={variant} onClick={handleClick}>
          {buttonLabel}
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={autoHideDuration}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>
      </Stack>
    </ThemeProvider>
  );
};

SnackbarAlert.propTypes = {
  children: PropTypes.any,
  autoHideDuration: PropTypes.number,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
};

export const SnackbarPositioned = ({ message, onClick }) => {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        onClick={handleClick({
          vertical: "top",
          horizontal: "center",
        })}
      >
        Top-Center
      </Button>
      <Button
        onClick={handleClick({
          vertical: "top",
          horizontal: "right",
        })}
      >
        Top-Right
      </Button>
      <Button
        onClick={handleClick({
          vertical: "bottom",
          horizontal: "right",
        })}
      >
        Bottom-Right
      </Button>
      <Button
        onClick={handleClick({
          vertical: "bottom",
          horizontal: "center",
        })}
      >
        Bottom-Center
      </Button>
      <Button
        onClick={handleClick({
          vertical: "bottom",
          horizontal: "left",
        })}
      >
        Bottom-Left
      </Button>
      <Button
        onClick={handleClick({
          vertical: "top",
          horizontal: "left",
        })}
      >
        Top-Left
      </Button>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={muiTheme}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </ThemeProvider>
  );
};

export const SnackbarMessageLength = ({
  children,
  onClick,
  variant,
  color,
  size,
  direction,
  disabled,
  startIcon,
  endIcon,
}) => {
  const action = (
    <Button color="secondary" size="small">
      lorem ipsum dolorem
    </Button>
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2} sx={{ maxWidth: 600 }}>
        <SnackbarContent message="I love snacks." action={action} />
        <SnackbarContent
          message={
            "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
          }
        />
        <SnackbarContent
          message="I love candy. I love cookies. I love cupcakes."
          action={action}
        />
        <SnackbarContent
          message={
            "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
          }
          action={action}
        />
      </Stack>
    </ThemeProvider>
  );
};

export const SnackbarTransition = ({
  children,
  onClick,
  variant,
  color,
  size,
  direction,
  disabled,
  startIcon,
  endIcon,
}) => {
  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  function GrowTransition(props) {
    return <Grow {...props} />;
  }
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>
      <Button onClick={handleClick(Fade)}>Fade Transition</Button>
      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="I love snacks"
        key={state.Transition.name}
      />
    </ThemeProvider>
  );
};

export const SnackbarFloatingsActionButtons = (props) => {
  const {
    color,
    variant,
    size,
    href,
    disabled,
    disableRipple,
    icons,
    label,
    snackLabel,
    autoHideDuration,
    message,
    anchorOrigin,
  } = props;
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

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        {snackLabel}
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          color={color}
          variant={variant}
          size={size}
          href={href}
          disabled={disabled}
          disableRipple={disableRipple}
          onClick={handleClick}
        >
          {label}
          {icons}
        </Fab>
        <Snackbar
          open={open}
          autoHideDuration={autoHideDuration}
          onClose={handleClose}
          message={message}
          action={action}
          anchorOrigin={anchorOrigin}
        />
      </Box>
    </ThemeProvider>
  );
};
SnackbarFloatingsActionButtons.propTypes = {
  children: PropTypes.element,
  action: PropTypes.node,
  autoHideDuration: PropTypes.number,
  snackLabel: PropTypes.node,
  onClose: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  href: PropTypes.node,
  label: PropTypes.node,
  open: PropTypes.bool,
  anchorOrigin: PropTypes.oneOf([
    { horizontal: "center" | "left" | "right", vertical: "bottom" | "top" },
  ]),
  color: PropTypes.oneOf([
    "primary",
    "success",
    "secondary",
    "error",
    "info",
    "warning",
  ]),
};
