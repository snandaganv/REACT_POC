import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import LinearProgress from "@mui/material/LinearProgress";
import variables from "../../assets/styles/variables.scss";

export const DefaultCircularProgresses = (props) => {
  const { color, disableShrink, variant, value } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ display: "flex" }}>
        <CircularProgress
          color={color}
          disableShrink={disableShrink}
          variant={variant}
          value={value}
        />
      </Box>
    </ThemeProvider>
  );
};

DefaultCircularProgresses.propTypes = {
  color: PropTypes.oneOf([
    "error",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  variant: PropTypes.oneOf(["determinate", "indeterminate"]),
  value: PropTypes.number,
  disableShrink: PropTypes.bool,
};

DefaultCircularProgresses.defaultProps = {
  color: "primary",
  variant: "indeterminate",
  value: 60,
  disableShrink: false,
};

export const CircularProgressWithLabel = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export const CircularProgressWithValueLabels = (props) => {
  const { time, color, steps } = props;
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + steps
      );
    }, time);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <CircularProgressWithLabel value={progress} color={color} />
    </Box>
  );
};

CircularProgressWithValueLabels.propTypes = {
  color: PropTypes.oneOf([
    "error",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  time: PropTypes.number,
  steps: PropTypes.number,
};

CircularProgressWithValueLabels.defaultProps = {
  color: "primary",
  time: 800,
  steps: 10,
};

export const CircularProgressIntegrations = (props) => {
  const { icon, color, label } = props;
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: variables.successMain,
      "&:hover": {
        bgcolor: variables.successDark,
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ m: 1, position: "relative" }}>
          <Fab
            aria-label="save"
            color={color}
            sx={buttonSx}
            onClick={handleButtonClick}
          >
            {success ? <CheckIcon /> : icon}
          </Fab>
          {loading && (
            <CircularProgress
              size={68}
              sx={{
                color: variables.successMain,
                position: "absolute",
                top: -6,
                left: -6,
                zIndex: 1,
              }}
            />
          )}
        </Box>
        <Box sx={{ m: 1, position: "relative" }}>
          <Button
            variant="contained"
            sx={buttonSx}
            disabled={loading}
            onClick={handleButtonClick}
            color={color}
          >
            {label}
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: variables.successMain,
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

CircularProgressIntegrations.propTypes = {
  color: PropTypes.oneOf([
    "error",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  label: PropTypes.node,
};

CircularProgressIntegrations.defaultProps = {
  color: "primary",
  label: "",
};

export const DefaultLinearProgresses = (props) => {
  const { color, variant, value } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ width: "100%" }}>
        <LinearProgress color={color} variant={variant} value={value} />
      </Box>
    </ThemeProvider>
  );
};

DefaultLinearProgresses.propTypes = {
  color: PropTypes.oneOf([
    "error",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  variant: PropTypes.oneOf(["determinate", "indeterminate", "query", "buffer"]),
  value: PropTypes.number,
};

DefaultLinearProgresses.defaultProps = {
  color: "primary",
  variant: "indeterminate",
  value: 60,
};

export const LinearProgressWithLabel = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export const LinearProgressWithValueLabels = (props) => {
  const { time, color, steps } = props;
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + steps
      );
    }, time);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} color={color} />
    </Box>
  );
};

LinearProgressWithValueLabels.propTypes = {
  color: PropTypes.oneOf([
    "error",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  time: PropTypes.number,
  steps: PropTypes.number,
};

LinearProgressWithValueLabels.defaultProps = {
  color: "primary",
  time: 800,
  steps: 10,
};

export const LinearBufferProgresses = (props) => {
  const { color, variant } = props;
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant={variant}
          value={progress}
          valueBuffer={buffer}
          color={color}
        />
      </Box>
    </ThemeProvider>
  );
};

LinearBufferProgresses.propTypes = {
  color: PropTypes.oneOf([
    "error",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  variant: PropTypes.oneOf(["determinate", "indeterminate", "query", "buffer"]),
};

LinearBufferProgresses.defaultProps = {
  color: "primary",
  variant: "indeterminate",
};
