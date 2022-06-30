import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import CheckBoxes from "../components/Checkbox";

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
  asideContent: (
    <FormControlLabel
      control={<Checkbox defaultChecked onClick={onclick} />}
      label="Checked label"
      onClick={onclick}
    />
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};

export const Group = Template.bind({});
Group.args = {
  label: "USA",
  asideContent: <CheckBoxes label="Poland" />,
};

// export const Save = () => (
//   <RadioGroup
//     row
//     aria-labelledby="demo-row-radio-buttons-group-label"
//     name="row-radio-buttons-group"
//   >
//     <Checkbox />
//     <Checkbox disabled />
//     <Checkbox defaultChecked color="error" />
//     <Checkbox defaultChecked color="default" />
//     <CheckBoxes label="testing" />
//   </RadioGroup>
// );

// Save.args = {
//   label: "Label",
//   size: "md",
// };

// const Template = (args) => (
//   <Checkbox {...args} label="Unchecked">
//     Label
//   </Checkbox>
//   <FormGroup {...args}>
//     <h3>Basic Checkbox</h3>
//     <FormControlLabel control={<Checkbox defaultChecked />} label="label" />
//     <FormControlLabel disabled control={<Checkbox />} label="Disabled" />

//     <h3>Colors</h3>
//     <RadioGroup
//       row
//       aria-labelledby="demo-row-radio-buttons-group-label"
//       name="row-radio-buttons-group"
//     >
//       <Checkbox {...args} />
//       <Checkbox {...args} disabled />
//       <Checkbox {...args} defaultChecked color="error" />
//       <Checkbox {...args} defaultChecked color="default" />
//       <Checkbox
//         {...args}
//         defaultChecked
//         sx={{
//           color: pink[800],
//           "&.Mui-checked": {
//             color: blue[600],
//           },
//         }}
//       />
//     </RadioGroup>
//     <h3>Group</h3>
//     <RadioGroup
//       row
//       aria-labelledby="demo-row-radio-buttons-group-label"
//       name="row-radio-buttons-group"
//     >
//       <FormControlLabel control={<Checkbox />} label="USA" />
//       <FormControlLabel control={<Checkbox />} label="India" />
//       <FormControlLabel control={<Checkbox />} label="Poland" />
//       <FormControlLabel control={<Checkbox />} label="Canada" />
//     </RadioGroup>
//   </FormGroup>
// );

// export const Default = Template.bind({});
// export const group = Template.bind({});
