import React from "react";
import { PropTypes } from "prop-types";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function CheckBoxes({ label, onclick }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox onClick={onclick} />}
        label={label}
      />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
  );
}

function CheckBoxesGroup({ label, onclick }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox onClick={onclick} />}
        label={label}
      />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
  );
}

CheckBoxes.prototype = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.Boolean,
  disabled: PropTypes.Boolean,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default CheckBoxes;
