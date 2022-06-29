import React from "react";
import { PropTypes } from "prop-types";
import {
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@mui/material";

function RadioButton({ label, onclick }) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={<Radio onClick={onclick} />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio onClick={onclick} />}
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={<Radio onClick={onclick} />}
          label="Other"
        />
        <FormControlLabel
          disabled
          value="other"
          control={<Radio onClick={onclick} />}
          label="Disabled"
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
};

export default RadioButton;
