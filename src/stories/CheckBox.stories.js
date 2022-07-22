import React from "react";
//import CheckBoxes from "../components/Checkbox";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
import { FormControl } from "@mui/material";

export default {
  title: "Input/Checkbox",
  component: Checkbox,
  argTypes: {
    onclick: {
      action: "checked",
    },
  },
};

export const BasicCheckboxes = ({}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
};

BasicCheckboxes.args = {
  label: "Label",
};

export const Labels = ({ label }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
  );
};
Labels.args = {
  label: "Label",
};

export const Sizes = ({ ...props }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <Checkbox {...label} defaultChecked size="small" />
      <Checkbox {...label} defaultChecked />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
      />
    </div>
  );
};
Sizes.args = {
  label: "label",
};

export const Colors = ({ ...props }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: blue[800],
          "&.Mui-checked": {
            color: blue[600],
          },
        }}
      />
    </div>
  );
};
Colors.args = {
  label: "label",
};

export const Group = ({ row, onclick, ...props }) => {
  const checkList = ["Apple", "Banana", "Orange", "Grape"];
  return (
    <FormGroup row={row}>
      {checkList.map((item, index) => (
        <div key={index}>
          <Checkbox value={item} type="checkbox" onClick={onclick} {...props} />
          <span>{item}</span>
        </div>
      ))}
    </FormGroup>
  );
};

Group.args = {
  row: true,
};

export const Inderterminate = ({ label, row, onClick, ...props }) => {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (e) => {
    setChecked([e.target.checked, e.target.checked]);
  };

  const handleChange2 = (e) => {
    setChecked([e.target.checked, checked[1]]);
  };

  const handleChange3 = (e) => {
    setChecked([checked[0], e.target.checked]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={
          <Checkbox
            checked={checked[0]}
            onChange={handleChange2}
            onClick={onClick}
            {...props}
          />
        }
      />
      <FormControlLabel
        label="Child 2"
        control={
          <Checkbox
            checked={checked[1]}
            onChange={handleChange3}
            onClick={onClick}
            {...props}
          />
        }
      />
    </Box>
  );
  return (
    <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
};

Inderterminate.args = {
  label: "Parent",
};

export const LabelsPlacement = ({ ...props }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="End"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
};
LabelsPlacement.args = {
  label: "label",
};
