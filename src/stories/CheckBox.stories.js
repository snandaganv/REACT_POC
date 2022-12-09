import { Checkbox } from "@mui/material";
import {
  CheckBoxBasics,
  CheckboxSizes,
  CheckboxGroup,
  CheckboxFormGroups,
  CheckboxInderterminate,
  CheckboxLabelsPlacement,
} from "../components/Checkbox";

export default {
  title: "Input/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["default", "success", "secondary"],
      control: { type: "radio" },
    },
    labelPlacement: {
      options: ["top", "start", "bottom", "end"],
      control: { type: "radio" },
    },
    onClick: { action: "check" },
  },
};
export const CheckBoxBasic = CheckBoxBasics.bind({});
CheckBoxBasic.args = {
  label: "Checkbox label",
  size: "medium",
  disabled: false,
};
CheckBoxBasic.parameters = {
  docs: {
    source: {
      code: `<FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            size="medium"
          />
        }
        label="Checkbox label"
        labelPlacement="end"
      />
    </FormGroup>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const CheckboxSize = CheckboxSizes.bind({});
CheckboxSize.parameters = {
  docs: {
    source: {
      code: `const label = { inputProps: { "aria-label": "Checkbox size demo" } };
      <div>
      <Checkbox {...label} defaultChecked size="small" />
      <Checkbox {...label} defaultChecked />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
      />
    </div>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const CheckboxGroups = CheckboxGroup.bind({});
CheckboxGroups.args = {
  row: true,
};
CheckboxGroups.parameters = {
  docs: {
    source: {
      code: `const checkList = ["Apple", "Banana", "Orange", "Grape"];
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
    </FormGroup>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const CheckboxFormGroup = CheckboxFormGroups.bind({});
CheckboxFormGroup.parameters = {
  docs: {
    source: {
      code: `<Box sx={{ display: "flex" }}>
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
    </Box>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const CheckboxInderterminates = CheckboxInderterminate.bind({});
CheckboxInderterminates.parameters = {
  docs: {
    source: {
      code: `const children = (
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
    </div>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const CheckboxLabelsPlacements = CheckboxLabelsPlacement.bind({});
CheckboxLabelsPlacements.parameters = {
  docs: {
    source: {
      code: `<FormControl component="fieldset">
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
    </FormControl>`,
      language: "react",
      type: "JSX",
    },
  },
};
