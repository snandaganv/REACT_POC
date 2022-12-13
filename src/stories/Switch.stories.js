import { Switch } from "@mui/material";
import {
  Switches,
  SwitchLabels,
  SwitchSizes,
  SwitchControlles,
  SwitchLabelsPlacement,
  SwitchFormGroups,
} from "../components/Switches";

export default {
  title: "Input/Switch",
  component: Switch,
  argTypes: {
    onClick: {
      action: "checked",
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    labelPlacement: {
      options: ["top", "start", "bottom", "end"],
      control: { type: "radio" },
    },
  },
};

export const Switchs = Switches.bind({});
Switchs.args = {
  label: "Switch label",
  disabled: false,
  defaultChecked: false,
};
Switchs.parameters = {
  docs: {
    source: {
      code: `<FormControlLabel
      control={
        <Switch
          size="medium"
        />
      }
      label="Switch label"
    />`,
      language: "html",
    },
  },
};
export const SwitchLabel = SwitchLabels.bind({});
SwitchLabel.parameters = {
  docs: {
    source: {
      code: `<FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="On" />
      <FormControlLabel control={<Switch />} label="Off" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>`,
      language: "html",
    },
  },
};
export const SwitchSize = SwitchSizes.bind({});
SwitchSize.parameters = {
  docs: {
    source: {
      code: `const label = { inputProps: { "aria-label": "Switch Size demo" } };
      <div>
      <Switch {...label} defaultChecked size="small" />
      <Switch {...label} defaultChecked />
    </div>`,
      language: "html",
    },
  },
};
export const SwitchControlled = SwitchControlles.bind({});
SwitchControlled.parameters = {
  docs: {
    source: {
      code: `const [checked, setChecked] = React.useState(true);
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />`,
      language: "html",
    },
  },
};
export const SwitchFormGroup = SwitchFormGroups.bind({});
SwitchFormGroup.parameters = {
  docs: {
    source: {
      code: `<FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.gilad}
              onChange={handleChange}
              name="gilad"
            />
          }
          label="Gilad Gray"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.jason}
              onChange={handleChange}
              name="jason"
            />
          }
          label="Jason Killian"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.antoine}
              onChange={handleChange}
              name="antoine"
            />
          }
          label="Antoine Llorca"
        />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>`,
      language: "html",
    },
  },
};
export const SwitchLabelsPlacements = SwitchLabelsPlacement.bind({});
SwitchLabelsPlacements.parameters = {
  docs: {
    source: {
      code: `<FormControl component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Switch defaultChecked color="primary" />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Switch defaultChecked color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="End"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>`,
      language: "html",
    },
  },
};
