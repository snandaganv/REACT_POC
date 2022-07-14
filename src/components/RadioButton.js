import React from "react";
import { PropTypes } from "prop-types";
import {
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@mui/material";

function RadioButton({ onClick, disabled, row }) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row={row}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={<Radio onClick={onClick} />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio onClick={onClick} />}
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={<Radio onClick={onClick} />}
          label="Disabled"
          disabled={disabled}
        />
      </RadioGroup>
    </FormControl>
  );
}

RadioButton.prototype = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.Boolean,
  disabled: PropTypes.Boolean,
  row: PropTypes.Boolean,
};

export default RadioButton;
