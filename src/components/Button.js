import React from "react";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { FormGroup, Stack, Box } from "@mui/material";
import Send from "@mui/icons-material/Send";
import { Alarm } from "@mui/icons-material";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Delete from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../.storybook/muiTheme";

export const ButtonDefaults = ({
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
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction={direction} spacing={2}>
        <Button
          onClick={onClick}
          variant={variant}
          color={color}
          size={size}
          disabled={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
        >
          {children}
        </Button>
      </Stack>
    </ThemeProvider>
  );
};

ButtonDefaults.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
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

export const ButtonBasics = ({ direction }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Text
        </Button>
        <Button variant="contained" color="primary">
          Contained
        </Button>
        <Button variant="outlined" color="primary">
          Outlined
        </Button>
        <Button variant="contained" color="primary" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </Stack>
    </ThemeProvider>
  );
};

export const ButtonColors = ({ color }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={2}>
        <Button color="primary" variant="contained">
          primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
      </Stack>
    </ThemeProvider>
  );
};

export const ButtonSizes = ({ size }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ "& button": { m: 1 } }}>
        <div>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
        <div>
          <Button variant="outlined" size="small">
            Small
          </Button>
          <Button variant="outlined" size="medium">
            Medium
          </Button>
          <Button variant="outlined" size="large">
            Large
          </Button>
        </div>
        <div>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export const ButtonIconExamples = ({ disabled }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <Delete />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <Alarm />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCart />
        </IconButton>
      </Stack>
    </ThemeProvider>
  );
};
export const ButtonIcon = ({ onClick, color, disabled, size, icon }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
        <IconButton
          aria-label=""
          size={size}
          disabled={disabled}
          color={color}
          onClick={onClick}
        >
          {icon}
        </IconButton>
      </Stack>
    </ThemeProvider>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf([
    "primary",
    "success",
    "secondary",
    "error",
    "info",
    "warning",
  ]),
};

export const ButtonHandingClick = ({ onClick }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Button
        color="primary"
        onClick={() => {
          alert("clicked");
        }}
      >
        Click me
      </Button>
    </ThemeProvider>
  );
};

export const ButtonIconLabelButton = ({ startIcon, endIcon }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <FormGroup>
        <Stack direction="row" spacing={2} mb="12px">
          <Button variant="outlined" color="primary" startIcon={<Delete />}>
            Delete
          </Button>
          <Button variant="contained" color="primary" endIcon={<Send />}>
            Send
          </Button>
        </Stack>
        
      </FormGroup>
    </ThemeProvider>
  );
};

export const ButtonLoadings = ({
  loadingIndicator,
  loading,
  loadingPosition,
  variant,
  disabled,
  startIcon,
  endIcon,
  children,
}) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <FormGroup>
        <Stack direction="row" spacing={2} mb="12px">
          <LoadingButton
            loading={loading}
            variant={variant}
            loadingPosition={loadingPosition}
            loadingIndicator={loadingIndicator}
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
          >
            {children}
          </LoadingButton>
        </Stack>
      </FormGroup>
    </ThemeProvider>
  );
};

ButtonLoadings.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingIndicator: PropTypes.node,
  loadingPosition: PropTypes.oneOf(["start", "end", "center"]),
};
