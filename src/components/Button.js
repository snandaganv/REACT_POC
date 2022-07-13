import React from "react";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";

export const Defaults = ({ label, onClick, variant, color, size }) => {
  return (
    <Button onClick={onClick} variant={variant} color={color} size={size}>
      {label}
    </Button>
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
};

Defaults.defaultsProps = {
  label: "Button",
  size: "medium",
  onClick: undefined,
};
