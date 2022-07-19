import React from "react";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import Save from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";

export const Defaults = ({
  label,
  onClick,
  variant,
  color,
  size,
  direction,
}) => {
  return (
    <Stack direction={direction} spacing={2}>
      <Button onClick={onClick} variant={variant} color={color} size={size}>
        {label}
      </Button>
    </Stack>
  );
};

Defaults.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
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

export const ButtonGroups = ({ color, direction, onClick, size }) => {
  return (
    <Stack direction={direction} spacing={2}>
      <Button variant="text" onClick={onClick} size={size} color={color}>
        Text
      </Button>
      <Button variant="contained" onClick={onClick} size={size} color={color}>
        Contained
      </Button>
      <Button variant="outlined" onClick={onClick} size={size} color={color}>
        Outlined
      </Button>
      <Button disabled variant="contained" size={size}>
        Disabled
      </Button>
    </Stack>
  );
};

ButtonGroups.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "success",
    "secondary",
    "error",
    "info",
    "warning",
  ]),
  onClick: PropTypes.func,
};

export const ButtonIcon = ({
  onClick,
  label,
  direction,
  variant,
  startIcon,
  endIcon,
  size,
  color,
}) => {
  return (
    <Stack direction={direction} spacing={2}>
      <Button
        variant={variant}
        onClick={onClick}
        startIcon={startIcon}
        size={size}
        color={color}
      >
        {label}
      </Button>
      <Button
        variant={variant}
        onClick={onClick}
        size={size}
        color={color}
        endIcon={endIcon}
      >
        Send
      </Button>
    </Stack>
  );
};

ButtonIcon.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "success",
    "secondary",
    "error",
    "info",
    "warning",
  ]),
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  endIcon: PropTypes.func,
  startIcon: PropTypes.func,
};

export const LoadingButtons = ({
  loading,
  direction,
  loadingIndicator,
  loadingPosition,
  size,
  variant,
  onClick,
}) => {
  return (
    <Stack direction={direction} spacing={2}>
      <LoadingButton variant={variant} size={size} onClick={onClick}>
        Submit
      </LoadingButton>
      <LoadingButton loading={loading} size={size} variant={variant}>
        CLick to Sumbit
      </LoadingButton>
      <LoadingButton
        loading
        loadingIndicator={loadingIndicator}
        variant={variant}
        size={size}
      >
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition={loadingPosition}
        size={size}
        startIcon={<Save />}
        variant={variant}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

LoadingButtons.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  loading: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string,
  loadingIndicator: PropTypes.string,
  loadingPosition: PropTypes.string,
  onClick: PropTypes.func,
};
