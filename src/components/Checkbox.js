import React from "react";
import { PropTypes } from "prop-types";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
} from "@mui/material";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";

import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../.storybook/muiTheme";

export const CheckBoxBasics = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <FormGroup>
        <FormControlLabel {...props} control={<Checkbox {...props} />} />
      </FormGroup>
    </ThemeProvider>
  );
};
CheckBoxBasics.prototype = {
  label: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(["top", "start", "bottom", "end"]),
};

export const CheckboxSizes = ({ size }) => {
  const label = { inputProps: { "aria-label": "Checkbox size demo" } };
  return (
    <ThemeProvider theme={muiTheme}>
      <div>
        <Checkbox {...label} defaultChecked size="small" />
        <Checkbox {...label} defaultChecked />
        <Checkbox
          {...label}
          defaultChecked
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
      </div>
    </ThemeProvider>
  );
};
CheckboxSizes.args = {
  label: "label",
};

export const CheckboxGroup = ({ row, onclick, ...props }) => {
  const checkList = ["Apple", "Banana", "Orange", "Grape"];
  return (
    <ThemeProvider theme={muiTheme}>
      <FormGroup row={row}>
        {checkList.map((item, index) => (
          <div key={index}>
            <Checkbox
              value={item}
              type="checkbox"
              onClick={onclick}
              {...props}
            />
            <span>{item}</span>
          </div>
        ))}
      </FormGroup>
    </ThemeProvider>
  );
};

export const CheckboxFormGroups = ({ checked }) => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
        <FormControl
          required
          error={error}
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard"
        >
          <FormLabel component="legend">Pick two</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};
CheckboxGroup.args = {
  row: true,
};

export const CheckboxInderterminate = ({
  label,
  row,
  onClick,
  onChange,
  ...props
}) => {
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
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );
  return (
    <ThemeProvider theme={muiTheme}>
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
    </ThemeProvider>
  );
};

CheckboxInderterminate.prototype = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export const CheckboxLabelsPlacement = ({ labelPlacement }) => {
  return (
    <ThemeProvider theme={muiTheme}>
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
    </ThemeProvider>
  );
};
CheckboxLabelsPlacement.args = {
  label: "label",
};
