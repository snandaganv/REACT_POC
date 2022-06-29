import RadioButton from "../components/RadioButton";

export default {
  title: "Input/Radio",
  Component: RadioButton,
  argTypes: {
    disabled: { control: "boolean" },
    onclick: {
      action: "checked",
    },
  },
};

const Template = (args) => <RadioButton {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: "Unchecked",
  size: "md",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Unchecked",
  size: "md",
};

export const RadioButtonGroup = Template.bind({});
RadioButtonGroup.args = {
  label: "Unchecked",
  size: "md",
};

// const Template = (args) => (
//   <FormControl>
//     <h3>Radio Group</h3>
//     <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//     <RadioGroup
//       aria-labelledby="demo-radio-buttons-group-label"
//       defaultValue="female"
//       name="radio-buttons-group"
//     >
//       <FormControlLabel value="female" control={<Radio />} label="Female" />
//       <FormControlLabel value="male" control={<Radio />} label="Male" />
//       <FormControlLabel value="other" control={<Radio />} label="Other" />
//     </RadioGroup>
//     <h3>Row</h3>
//     <p>To lay out the buttons horizontally, set the row prop:</p>
//     <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
//     <RadioGroup
//       row
//       aria-labelledby="demo-row-radio-buttons-group-label"
//       name="row-radio-buttons-group"
//     >
//       <FormControlLabel value="female" control={<Radio />} label="Female" />
//       <FormControlLabel value="male" control={<Radio />} label="Male" />
//       <FormControlLabel value="other" control={<Radio />} label="Other" />
//       <FormControlLabel
//         value="disabled"
//         disabled
//         control={<Radio />}
//         label="other"
//       />
//     </RadioGroup>
//   </FormControl>
// );

// export const Default = Template.bind({});
