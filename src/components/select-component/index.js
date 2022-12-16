import { FormHelperText } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import { InputLabel as InputLabelMUI } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { PropTypes } from "prop-types";
import * as React from "react";
import muiTheme from "../../../.storybook/muiTheme";
import { Select as SelectMUI } from "@mui/material";

export const Select = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <SelectMUI {...props}>{props.children}</SelectMUI>
    </ThemeProvider>
  );
};

export const InputLabel = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <InputLabelMUI {...props}>{props.children}</InputLabelMUI>
    </ThemeProvider>
  );
};

export const SelectsDefault = ({
  variant,
  disabled,
  error,
  size,
  required,
  selectlabel,
  selectoptions,
  optnone,
}) => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl
        fullWidth
        disabled={disabled}
        size={size}
        error={error}
        required={required}
      >
        <InputLabel>
          {selectlabel.map((item) => {
            return item.label;
          })}
        </InputLabel>
        <Select variant={variant} label="Select" onChange={handleChange}>
          {selectoptions.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

SelectsDefault.propTypes = {
  selectlabel: PropTypes.array,
  variant: PropTypes.oneOf(["standard", "filled"]),
};

export const SelectsBasic = ({ size, selectlabel, selectoptions }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <FormControl sx={{ m: 1, width: 300 }} size={size}>
          <InputLabel>
            {selectlabel.map((item) => {
              return item.label;
            })}
          </InputLabel>
          <Select
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
          >
            {selectoptions.map((item) => (
              <MenuItem value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
};
SelectsBasic.propTypes = {
  size: PropTypes.array,
  selectlabel: PropTypes.array,
  selectoptions: PropTypes.array,
};

export const SelectsVariant = ({ selectlabel, selectoptions }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>
            {selectlabel.map((item) => {
              return item.label;
            })}
          </InputLabel>
          <Select onChange={handleChange} label="Select">
            {selectoptions.map((item) => (
              <MenuItem value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>
            {selectlabel.map((item) => {
              return item.label;
            })}
          </InputLabel>
          <Select label="Select" onChange={handleChange}>
            {selectoptions.map((item) => (
              <MenuItem value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>
            {selectlabel.map((item) => {
              return item.label;
            })}
          </InputLabel>
          <Select label="Select" onChange={handleChange}>
            {selectoptions.map((item) => (
              <MenuItem value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
    </div>
  );
};
SelectsVariant.propTypes = {
  selectlabel: PropTypes.array,
  selectoptions: PropTypes.array,
};

export const SelectsAutoWidth = ({ selectlabel, autowidth }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel>
          {selectlabel.map((item) => {
            return item.label;
          })}
        </InputLabel>
        <Select onChange={handleChange} autoWidth label="Sort">
          {autowidth.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
SelectsAutoWidth.propTypes = {
  selectlabel: PropTypes.array,
  autowidth: PropTypes.array,
};

export const SelectsSize = ({ selectlabel, selectoptions }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>
          {selectlabel.map((item) => {
            return item.label;
          })}
        </InputLabel>
        <Select label="Select" onChange={handleChange}>
          {selectoptions.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};
SelectsSize.propTypes = {
  selectlabel: PropTypes.array,
  selectoptions: PropTypes.array,
};

export const SelectsLabel = ({ selectlabel, selectoptions }) => {
  const theme = useTheme();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>
          {selectlabel.map((item) => {
            return item.label;
          })}
        </InputLabel>
        <Select value={age} label="Select" onChange={handleChange}>
          {selectoptions.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          onChange={handleChange}
          value={age}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {selectoptions.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
    </div>
  );
};
SelectsLabel.propTypes = {
  selectlabel: PropTypes.array,
  selectoptions: PropTypes.array,
};

export const SelectsOtherProps = ({ selectlabel, selectoptions }) => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
        <InputLabel>
          {selectlabel.map((item) => {
            return item.label;
          })}
        </InputLabel>
        <Select value={age} label="Select" onChange={handleChange}>
          {selectoptions.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel>
          {selectlabel.map((item) => {
            return item.label;
          })}
        </InputLabel>
        <Select
          value={age}
          label="Select"
          onChange={handleChange}
          renderValue={(value) => `⚠️  - ${value}`}
        >
          {selectoptions.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>
          {selectlabel.map((item) => {
            return item.label;
          })}
        </InputLabel>
        <Select
          value={age}
          label="Select"
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          {selectoptions.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>
          {selectlabel.map((item) => {
            return item.label;
          })}
        </InputLabel>
        <Select value={age} label="Select *" onChange={handleChange}>
          {selectoptions.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
};
SelectsOtherProps.propTypes = {
  selectlabel: PropTypes.array,
  selectoptions: PropTypes.array,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export const SelectsMultiple = (props) => {
  const { selectmultiple, selectlabel } = props;
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>
          {selectlabel.map((item) => {
            return item.label;
          })}
        </InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Select" />}
          MenuProps={MenuProps}
        >
          {selectmultiple.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
SelectsMultiple.propTypes = {
  selectlabel: PropTypes.array,
  selectmultiple: PropTypes.array,
};
export const SelectsMultipleCheckmark = (props) => {
  const { names, multilabel } = props;
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>
          {multilabel.map((item) => {
            return item.label;
          })}
        </InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
SelectsMultipleCheckmark.propTypes = {
  names: PropTypes.array,
};

export const SelectsMultipleChip = (props) => {
  const { names, chiplabel } = props;
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>
          {chiplabel.map((item) => {
            return item.label;
          })}
        </InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
SelectsMultipleChip.propTypes = {
  names: PropTypes.array,
};

export const SelectsMultiplePlaceholder = (props) => {
  const { names } = props;
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
SelectsMultiplePlaceholder.propTypes = {
  names: PropTypes.array,
};

export const SelectsGroup = (props) => {
  const { splitedIdenties, grouplabel } = props;
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const onTargetIdentityChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ width: "300px" }}>
        <FormControl fullWidth>
          <InputLabel
            htmlFor="grouped-select"
            sx={{ backgroundColor: "#ffffff" }}
          >
            {grouplabel.map((item) => {
              return item.label;
            })}
          </InputLabel>
          <Select
            label="Grouping"
            value={personName}
            onChange={onTargetIdentityChange}
          >
            {Object.keys(splitedIdenties).map(
              (identityTypeKey, identityTypeIndex) => {
                let children = [];
                children.push(
                  <MenuItem
                    disabled
                    key={identityTypeIndex}
                    value={identityTypeKey}
                  >
                    {identityTypeKey}
                  </MenuItem>
                );
                splitedIdenties[identityTypeKey].forEach((identity) => {
                  children.push(
                    <MenuItem key={identity.id} value={identity.id}>
                      {identity.age}
                    </MenuItem>
                  );
                });

                return children;
              }
            )}
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};
