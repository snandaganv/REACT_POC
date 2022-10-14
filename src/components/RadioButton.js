import React from "react";
import { PropTypes } from "prop-types";
import { Button } from "@mui/material";
import { FormHelperText } from "@mui/material";
import {
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../.storybook/muiTheme";

export const RadioButtonBasics = ({
  label,
  row,
  onClick,
  disabled,
  size,
  labelPlacement,
  checked,
  onChange,
  required,
  value,
  name,
}) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <FormControl>
        <RadioGroup
          row={row}
          aria-labelledby=""
          defaultValue=""
          name={name}
          onChange={onChange}
        >
          <FormControlLabel
            value={value}
            control={
              <Radio
                onClick={onClick}
                size={size}
                checked={checked}
                onChange={onChange}
                required={required}
              />
            }
            label={label}
            disabled={disabled}
            labelPlacement={labelPlacement}
          />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};
RadioButtonBasics.prototype = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  row: PropTypes.bool,
  name: PropTypes.string,
};

export const RadiosButtonGroup = (row) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};

export const RadioButtonDirection = (row) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};

export const RadioButtonControlleds = ({ onChange }) => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};

export const RadioButtonSize = (row, ...props) => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <RadioGroup row="row">
        <Radio {...controlProps("a")} size="small" />
        <Radio {...controlProps("b")} />
        <Radio
          {...controlProps("c")}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 28,
            },
          }}
        />
      </RadioGroup>
    </ThemeProvider>
  );
};

export const RadioButtonLabelPlacements = ({ onClick, disabled, ...props }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="top"
        >
          <FormControlLabel
            value="top"
            control={<Radio onClick={onClick} disabled={disabled} {...props} />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Radio disabled={disabled} {...props} />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Radio disabled={disabled} {...props} />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={<Radio disabled={disabled} {...props} />}
            label="End"
          />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};

RadioButtonLabelPlacements.args = {
  disabled: false,
};

export const RadioButtonShowErrors = ({ onChange }) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 3 }} error={error} variant="standard">
          <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="best"
              control={<Radio />}
              label="The best!"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="The worst."
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Check Answer
          </Button>
        </FormControl>
      </form>
    </ThemeProvider>
  );
};
