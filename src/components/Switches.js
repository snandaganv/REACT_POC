import * as React from "react";
import { PropTypes } from "prop-types";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { FormControl, FormLabel } from "@mui/material";
//import { FormLabel } from "@mui/material";

export const Switches = ({ label, onclick, disabled }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked onClick={onclick} />}
        label={label}
        disabled={disabled}
      />
    </FormGroup>
  );
};

Switches.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export const SwitchSizeColor = ({ label, onclick, disabled, size, color }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch defaultChecked onClick={onclick} size={size} color={color} />
        }
        label={label}
        disabled={disabled}
      />
      <FormControlLabel
        control={
          <Switch defaultChecked onClick={onclick} size={size} color={color} />
        }
        label={label}
        disabled={disabled}
      />
      <FormControlLabel
        control={
          <Switch defaultChecked onClick={onclick} size={size} color={color} />
        }
        label={label}
        disabled={disabled}
      />
      <FormControlLabel
        control={
          <Switch defaultChecked onClick={onclick} size={size} color={color} />
        }
        label={label}
        disabled={disabled}
      />
    </FormGroup>
  );
};

SwitchSizeColor.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium"]),
  color: PropTypes.oneOf(["default", "warning", "primary", "secondary"]),
};

export const LabelPlacements = ({ labelPlacement, color, size }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Label placements</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="label1"
          control={<Switch size={size} />}
          label="Label 1"
          labelPlacement={labelPlacement}
        />
        <FormControlLabel
          value="label2"
          control={<Switch size={size} />}
          label="Label 2"
          labelPlacement={labelPlacement}
        />
        <FormControlLabel
          value="label3"
          control={<Switch size={size} />}
          label="Label 3"
          labelPlacement={labelPlacement}
        />
      </FormGroup>
    </FormControl>
  );
};
LabelPlacements.propTypes = {
  labelPlacement: PropTypes.oneOf(["top", "start", "bottom", "end"]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium"]),
};
