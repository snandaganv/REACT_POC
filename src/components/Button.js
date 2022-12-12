import React from "react";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Send from "@mui/icons-material/Send";
import { Alarm } from "@mui/icons-material";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Delete from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../.storybook/muiTheme";

export const ButtonDefault = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Button {...props}>{props.children}</Button>
    </ThemeProvider>
  );
};

export const IconButtonDefault = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <IconButton {...props}>{props.children}</IconButton>
    </ThemeProvider>
  );
};

export const LoadingButtonDefault = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <LoadingButton {...props}>{props.children}</LoadingButton>
    </ThemeProvider>
  );
};

ButtonDefault.propTypes = {
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
  icon: PropTypes.any
};

IconButtonDefault.propTypes = { ...ButtonDefault.propTypes };
LoadingButtonDefault.propTypes = {
  loading: PropTypes.bool,
  ...ButtonDefault.propTypes,
};

export const ButtonBasics = ({ direction }) => {
  return (
    <Stack spacing={2} direction="row">
      <ButtonDefault variant="text" color="primary">
        Text
      </ButtonDefault>
      <ButtonDefault variant="contained" color="primary">
        Contained
      </ButtonDefault>
      <ButtonDefault variant="outlined" color="primary">
        Outlined
      </ButtonDefault>
      <ButtonDefault variant="contained" color="primary" disabled>
        Disabled
      </ButtonDefault>
      <ButtonDefault
        variant="contained"
        color="primary"
        href="#contained-buttons"
      >
        Link
      </ButtonDefault>
    </Stack>
  );
};

export const ButtonColors = ({ color }) => {
  return (
    <Stack direction="row" spacing={2}>
      <ButtonDefault color="primary" variant="contained">
        primary
      </ButtonDefault>
      <ButtonDefault color="secondary" variant="contained">
        Secondary
      </ButtonDefault>
      <ButtonDefault variant="contained" color="success">
        Success
      </ButtonDefault>
      <ButtonDefault variant="outlined" color="error">
        Error
      </ButtonDefault>
      <ButtonDefault variant="outlined" color="info">
        Info
      </ButtonDefault>
      <ButtonDefault variant="outlined" color="warning">
        Warning
      </ButtonDefault>
    </Stack>
  );
};

export const ButtonSizes = ({ size }) => {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <ButtonDefault size="small">Small</ButtonDefault>
        <ButtonDefault size="medium">Medium</ButtonDefault>
        <ButtonDefault size="large">Large</ButtonDefault>
      </div>
      <div>
        <ButtonDefault variant="outlined" size="small">
          Small
        </ButtonDefault>
        <ButtonDefault variant="outlined" size="medium">
          Medium
        </ButtonDefault>
        <ButtonDefault variant="outlined" size="large">
          Large
        </ButtonDefault>
      </div>
      <div>
        <ButtonDefault variant="contained" size="small">
          Small
        </ButtonDefault>
        <ButtonDefault variant="contained" size="medium">
          Medium
        </ButtonDefault>
        <ButtonDefault variant="contained" size="large">
          Large
        </ButtonDefault>
      </div>
    </Box>
  );
};

export const ButtonIconExamples = ({ disabled }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
        <IconButtonDefault aria-label="delete">
          <Delete />
        </IconButtonDefault>
        <IconButtonDefault aria-label="delete" disabled color="primary">
          <Delete />
        </IconButtonDefault>
        <IconButtonDefault color="secondary" aria-label="add an alarm">
          <Alarm />
        </IconButtonDefault>
        <IconButtonDefault color="primary" aria-label="add to shopping cart">
          <AddShoppingCart />
        </IconButtonDefault>
      </Stack>
    </ThemeProvider>
  );
};

export const ButtonHandlingClick = ({ onClick }) => {
  return (
    <ButtonDefault
      color="primary"
      onClick={() => {
        alert("clicked");
      }}
    >
      Click me
    </ButtonDefault>
  );
};

export const ButtonIconLabelButton = ({ startIcon, endIcon }) => {
  return (
    <FormGroup>
      <Stack direction="row" spacing={2} mb="12px">
        <ButtonDefault
          variant="outlined"
          color="primary"
          startIcon={<Delete />}
        >
          Delete
        </ButtonDefault>
        <ButtonDefault variant="contained" color="primary" endIcon={<Send />}>
          Send
        </ButtonDefault>
      </Stack>
    </FormGroup>
  );
};

export const ButtonLoadings = (props) => {
  return (
    <Stack direction="row" spacing={2} mb="12px">
      <LoadingButtonDefault {...props}>{props.children}</LoadingButtonDefault>
    </Stack>
  );
};
