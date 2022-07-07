import React from "react";
import CheckBoxes from "../components/Checkbox";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Box } from "@mui/material";

export default {
  title: "Input/Checkbox",
  component: CheckBoxes,
  argTypes: {
    onclick: {
      action: "checked",
    },
  },
};

const Template = (args) => <CheckBoxes {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
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
          <CheckBoxes
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
          <CheckBoxes
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
        label={label}
        control={
          <CheckBoxes
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
            onClick={onClick}
            {...props}
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
