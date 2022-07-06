import * as React from "react";
import { PropTypes } from "prop-types";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function ToggleButtons({ label, onclick, color, disabled }) {
  const [alignment, setAlignment] = React.useState("option1");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    //   <FormGroup>
    //     <FormControlLabel
    //       control={<Switch defaultChecked onClick={onclick} />}
    //       label={label}
    //       disabled={disabled}
    //     />
    //   </FormGroup>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      disabled={disabled}
    >
      <ToggleButton value="option1">Option 1</ToggleButton>
      <ToggleButton value="option2">Option 2</ToggleButton>
      <ToggleButton value="option3">Option 3 Disabled</ToggleButton>
    </ToggleButtonGroup>
  );
}

ToggleButtons.prototype = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.Boolean,
};

export default ToggleButtons;
