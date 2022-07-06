import * as React from "react";
import { PropTypes } from "prop-types";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function SwitchLabels({ label, onclick, color, disabled }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked onClick={onclick} />}
        label={label}
        disabled={disabled}
      />
    </FormGroup>
  );
}

SwitchLabels.prototype = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.Boolean,
};

export default SwitchLabels;
