import React from "react";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

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
