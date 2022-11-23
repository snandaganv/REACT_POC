import { Radio } from "@mui/material";
import {
  RadioButtonBasics,
  RadioButtonSize,
  RadiosButtonGroup,
  RadioButtonControlleds,
  RadioButtonDirection,
  RadioButtonLabelPlacements,
  RadioButtonShowErrors,
} from "../components/RadioButton";

export default {
  title: "Input/Radio Buttons",
  Component: Radio,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    labelPlacement: {
      options: ["top", "start", "bottom", "end"],
      control: { type: "radio" },
    },
    disabled: { control: "boolean" },
    onClick: {
      action: "checked",
    },
  },
};

export const RadioButtonBasic = RadioButtonBasics.bind({});
RadioButtonBasic.args = {
  label: "Radio button Label",
  row: true,
  size: "medium",
  labelPlacement: "end",
  disabled: false,
};
RadioButtonBasic.parameters = {
  docs: {
    source: {
      code: `
      <FormControlLabel
      value={value}
      control={
        <Radio
          size="medium"
        />
      }
      label="Radio button Label"
      disabled=false
      labelPlacement="end"
    />`,
      language: "html",
    },
  },
};
export const RadiosButtonGroups = RadiosButtonGroup.bind({});
RadiosButtonGroups.parameters = {
  docs: {
    source: {
      code: `
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
      </FormControl>`,
      language: "html",
    },
  },
};
export const RadioButtonDirections = RadioButtonDirection.bind({});
RadioButtonDirections.parameters = {
  docs: {
    source: {
      code: `
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
      </FormControl>`,
      language: "html",
    },
  },
};
export const RadioButtonControlled = RadioButtonControlleds.bind({});
RadioButtonControlled.parameters = {
  docs: {
    source: {
      code: `
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
      </FormControl>`,
      language: "html",
    },
  },
};
export const RadioButtonSizes = RadioButtonSize.bind({});
RadioButtonSizes.parameters = {
  docs: {
    source: {
      code: `
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
      </RadioGroup>`,
      language: "html",
    },
  },
};
export const RadioButtonLabelPlacement = RadioButtonLabelPlacements.bind({});
RadioButtonLabelPlacement.parameters = {
  docs: {
    source: {
      code: `
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
    </FormControl>`,
      language: "html",
    },
  },
};
export const RadioButtonShowError = RadioButtonShowErrors.bind({});
RadioButtonShowError.parameters = {
  docs: {
    source: {
      code: `
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
    </FormControl>`,
      language: "html",
    },
  },
};
