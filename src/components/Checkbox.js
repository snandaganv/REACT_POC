import React from "react";
import { PropTypes } from "prop-types";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function CheckBoxes({ label, onclick, asideContent, color, disabled }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox onClick={onclick} color={color} />}
        label={label}
        disabled={disabled}
      />
      {asideContent && asideContent}
    </FormGroup>
  );
}

CheckBoxes.prototype = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.Boolean,
  disabled: PropTypes.Boolean,
  defaultChecked: PropTypes.Boolean,
  asideContent: PropTypes.elementType,
};

export default CheckBoxes;
