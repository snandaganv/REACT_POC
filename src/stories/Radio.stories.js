import React from "react";
import { FormControl, RadioGroup, FormControlLabel } from "@mui/material";
import { blue } from "@mui/material/colors";
import RadioButton from "../components/RadioButton";
import { Radio } from "@mui/material";

export default {
  title: "Input/Radio",
  Component: RadioButton,
  argTypes: {
    disabled: { control: "boolean" },
    onClick: {
      action: "checked",
    },
  },
};

const Template = (args) => <RadioButton {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  label: "Radio Buttons",
  disabled: true,
  row: true,
};

export const Color = ({ row, onClick, ...props }) => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <RadioGroup row={row}>
      <Radio disabled />
      <Radio
        {...controlProps("b")}
        color="secondary"
        onClick={onClick}
        {...props}
      />
      <Radio
        {...controlProps("c")}
        color="success"
        onClick={onClick}
        {...props}
      />
      <Radio
        {...controlProps("d")}
        color="error"
        onClick={onClick}
        {...props}
      />
      <Radio
        {...controlProps("e")}
        sx={{
          color: blue[800],
          "&.Mui-checked": {
            color: blue[600],
          },
        }}
      />
    </RadioGroup>
  );
};

Color.args = {
  row: true,
};

export const RadioPlacements = ({ onClick, disabled, ...props }) => {
  return (
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
          control={<Radio onClick={onClick} disabled={disabled} {...props} />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio onClick={onClick} disabled={disabled} {...props} />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Radio onClick={onClick} disabled={disabled} {...props} />}
          label="End"
        />
      </RadioGroup>
    </FormControl>
  );
};

RadioPlacements.args = {
  disabled: false,
};
