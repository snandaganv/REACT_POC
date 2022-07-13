import React from "react";
import { PropTypes } from "prop-types";
import { TextField } from "@mui/material";

export const TextFields = ({ variant, error, placeholder, disabled }) => {
  return (
    <TextField
      variant={variant}
      error={error}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

TextFields.propTypes = {
  placeholder: PropTypes.string,
  error: PropTypes.func,
  variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
  disabled: PropTypes.bool,
};

TextFields.defaultsProps = {
  placeholder: "This is a placeholder",
};
