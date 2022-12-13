import { Select } from "@mui/material";
import {
  SelectsDefault,
  SelectsBasic,
  SelectsOtherProps,
  SelectsVariant,
  SelectsAutoWidth,
  SelectsSize,
  SelectsLabel,
  SelectsMultiple,
  SelectsMultipleCheckmark,
  SelectsMultipleChip,
  SelectsMultiplePlaceholder,
  SelectsGroup,
} from "../components/select-component";

export default {
  title: "Input/Select",
  component: Select,
  argTypes: {
    variant: {
      options: ["outlined", "standard", "filled"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
  },
};
const SelectsDefaultTemplate = (args) => (
  <SelectsDefault {...args}></SelectsDefault>
);
export const SelectDefault = SelectsDefaultTemplate.bind({});
SelectDefault.args = {
  selectlabel: [{ label: "Select" }],
  variant: "outlined",
  disabled: false,
  error: false,
  required: false,
  selectoptions: [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ],
};
SelectDefault.parameters = {
  docs: {
    source: {
      code: `const selectlabel= [{ label: "Select" }]  
      const selectoptions = [
        { value: 1, label: "Option 1" },
        { value: 2, label: "Option 2" },
        { value: 3, label: "Option 3" },
      ],
      const             
      <FormControl sx={{ m: 1, width: 300 }} size={size}>
      <InputLabel id="demo-simple-select-label">{selectlabel.map((item) => { return item.label })}</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
      >
          <MenuItem value={null}>
              <em>None</em>
          </MenuItem>
          {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
      </Select>
  </FormControl>`,
      language: "html",
    },
  },
};

export const BasicSelect = SelectsBasic.bind({});
BasicSelect.args = {
  selectlabel: [{ label: "Name" }],
  size: false,
  selectoptions: [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ],
};
BasicSelect.parameters = {
  docs: {
    source: {
      code: ` const  selectlabel = [{ label: "Name" }],
     const selectoptions = [
        { value: 1, label: "Option 1" },
        { value: 2, label: "Option 2" },
        { value: 3, label: "Option 3" },
      ],
      <FormControl sx={{ m: 1, width: 300 }} size={size}>
      <InputLabel id="demo-simple-select-label">{selectlabel.map((item) => { return item.label })}</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
      >
          <MenuItem value={null}>
              <em>None</em>
          </MenuItem>
          {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
      </Select>
  </FormControl>`,
      language: "html",
    },
  },
};
const SelectsVariantTemplate = (args) => (
  <SelectsVariant {...args}></SelectsVariant>
);
export const SelectVariant = SelectsVariantTemplate.bind({});
SelectVariant.args = {
  selectlabel: [{ label: "Select" }],
  selectoptions: [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ],
};
SelectVariant.parameters = {
  docs: {
    source: {
      code: ` const selectlabel = [{ label: "Select" }],
      const selectoptions = [
        { value: 1, label: "Option 1" },
        { value: 2, label: "Option 2" },
        { value: 3, label: "Option 3" },
      ],     
      <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">{selectlabel.map((item) => { return item.label })}</InputLabel>
              <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  onChange={handleChange}
                  label="Select"
              >
                  <MenuItem value={null}>
                      <em>None</em>
                  </MenuItem>
                  {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
              </Select>
          </FormControl>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">{selectlabel.map((item) => { return item.label })}</InputLabel>
              <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  label="Select"
                  onChange={handleChange}
              >
                  <MenuItem value={null}>
                      <em>None</em>
                  </MenuItem>
                  {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
              </Select>
          </FormControl>

          <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-outlined-label">{selectlabel.map((item) => { return item.label })}</InputLabel>
              <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Select"
                  onChange={handleChange}
              >
                  <MenuItem value={null}>
                      <em>None</em>
                  </MenuItem>
                  {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
              </Select>
          </FormControl>

  </div>`,
      language: "html",
    },
  },
};
const SelectsAutoWidthTemplate = (args) => (
  <SelectsAutoWidth {...args}></SelectsAutoWidth>
);
export const SelectAutoWidth = SelectsAutoWidthTemplate.bind({});
SelectAutoWidth.args = {
  selectlabel: [{ label: "Sort" }],
  autowidth: [
    { value: 1, label: "Options" },
    { value: 2, label: "Option Two" },
    { value: 3, label: "Option Twenty" },
  ],
};
SelectAutoWidth.parameters = {
  docs: {
    source: {
      code: ` const selectlabel = [{ label: "Sort" }],
      const autowidth = [
        { value: 1, label: "Options" },
        { value: 2, label: "Option Two" },
        { value: 3, label: "Option Twenty" },
      ],
      <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">{selectlabel.map((item) => { return item.label })}</InputLabel>
          <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              onChange={handleChange}
              autoWidth
              label="Sort"
          >
              <MenuItem>
                  <em>None</em>
              </MenuItem>
              {autowidth.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
          </Select>
      </FormControl>
  </div>`,
      language: "html",
    },
  },
};
const SelectsSizeTemplate = (args) => <SelectsSize {...args}></SelectsSize>;
export const SelectSize = SelectsSizeTemplate.bind({});
SelectSize.args = {
  selectlabel: [{ label: "Name" }],
  selectoptions: [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ],
};
SelectSize.parameters = {
  docs: {
    source: {
      code: `     const selectlabel = [{ label: "Name" }],
        const selectoptions =  [
          { value: 1, label: "Option 1" },
          { value: 2, label: "Option 2" },
          { value: 3, label: "Option 3" },
        ],
           const [age, setAge] = React.useState('');

        const handleChange = (event: SelectChangeEvent) => {
            setAge(event.target.value);
        };
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">{selectlabel.map((item) => { return item.label })}</InputLabel>
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Select"
            onChange={handleChange}

        >
            <MenuItem value={null}>
                <em>None</em>
            </MenuItem>
            {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
        </Select>
    </FormControl>`,
      language: "html",
    },
  },
};
const SelectsLabelTemplate = (args) => <SelectsLabel {...args}></SelectsLabel>;
export const SelectLabel = SelectsLabelTemplate.bind({});
SelectLabel.args = {
  selectlabel: [{ label: "Select" }],
  selectoptions: [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ],
};
SelectLabel.parameters = {
  docs: {
    source: {
      code: `     const [age, setAge] = React.useState('');

      const handleChange = (event: SelectChangeEvent) => {
          setAge(event.target.value);
      };
      const selectlabel = [{ label: "Select" }],
      const selectoptions = [
        { value: 1, label: "Option 1" },
        { value: 2, label: "Option 2" },
        { value: 3, label: "Option 3" },
      ],
             <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">{selectlabel.map((item) => { return item.label })}</InputLabel>
          <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Select"
              onChange={handleChange}
          >
              <MenuItem value={null}>
                  <em>None</em>
              </MenuItem>
              {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
          </Select>
          <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
              onChange={handleChange}
              value={age}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
          >
              <MenuItem value="">
                  <em>None</em>
              </MenuItem>
              {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
          </Select>
          <FormHelperText>Without label</FormHelperText>
      </FormControl>
  </div>`,
      language: "html",
    },
  },
};

const SelectsOtherPropsTemplate = (args) => (
  <SelectsOtherProps {...args}></SelectsOtherProps>
);
export const SelectOtherProp = SelectsOtherPropsTemplate.bind({});
SelectOtherProp.args = {
  selectlabel: [{ label: "Select" }],
  selectoptions: [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ],
};
SelectOtherProp.parameters = {
  docs: {
    source: {
      code: `    const [age, setAge] = React.useState('');
      const handleChange = (event: SelectChangeEvent) => {
          setAge(event.target.value)
      };            
      <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
      <InputLabel id="demo-simple-select-disabled-label">{selectlabel.map((item) => { return item.label })}</InputLabel>
      <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          label="Select"
          onChange={handleChange}
      >
          <MenuItem value="">
              <em>None</em>
          </MenuItem>
          {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
      </Select>
      <FormHelperText>Disabled</FormHelperText>
  </FormControl>
  <FormControl sx={{ m: 1, minWidth: 120 }} error>
      <InputLabel id="demo-simple-select-error-label">{selectlabel.map((item) => { return item.label })}</InputLabel>
      <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          label="Select"
          onChange={handleChange}
      >
          <MenuItem value="">
              <em>None</em>
          </MenuItem>
          {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
      </Select>
      <FormHelperText>Error</FormHelperText>
  </FormControl>
  <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-readonly-label">{selectlabel.map((item) => { return item.label })}</InputLabel>
      <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          label="Select"
          onChange={handleChange}
          inputProps={{ readOnly: true }}
      >
          <MenuItem value="">
              <em>None</em>
          </MenuItem>
          {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
      </Select>
      <FormHelperText>Read only</FormHelperText>
  </FormControl>
  <FormControl required sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-required-label">{selectlabel.map((item) => { return item.label })}</InputLabel>
      <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Select *"
          onChange={handleChange}
      >
          <MenuItem value="">
              <em>None</em>
          </MenuItem>
          {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
      </Select>
      <FormHelperText>Required</FormHelperText>
  </FormControl>`,
      language: "html",
    },
  },
};
export const MultipleSelect = SelectsMultiple.bind({});
MultipleSelect.args = {
  selectlabel: [{ label: "Select" }],
  selectmultiple: [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option222 2" },
    { value: 3, label: "Option 3" },
    { value: 4, label: "Option 4" },
    { value: 5, label: "Option 5" },
    { value: 6, label: "Option 6" },
    { value: 7, label: "Option 7" },
    { value: 8, label: "Option 8" },
    { value: 9, label: "Option 9" },
  ],
};
MultipleSelect.parameters = {
  docs: {
    source: {
      code: `
        const [personName, setPersonName] = React.useState([]);
        const selectlabel = [{ label: "Select" }],
        const selectmultiple = [
            { value: 1, label: "Option 1" },
            { value: 2, label: "Option222 2" },
            { value: 3, label: "Option 3" },
            { value: 4, label: "Option 4" },
            { value: 5, label: "Option 5" },
            { value: 6, label: "Option 6" },
            { value: 7, label: "Option 7" },
            { value: 8, label: "Option 8" },
            { value: 9, label: "Option 9" },
          ]

        const handleChange = (event: SelectChangeEvent) => {
            const {
                target: { value },
            } = event;
            setPersonName(
                typeof value === 'string' ? value.split(',') : value,
            );
        };
        <div>
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">{selectlabel.map((item) => { return item.label })}</InputLabel>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Select" />}
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
    </div>`,
      language: "html",
    },
  },
};

export const MultipleSelectCheckmark = SelectsMultipleCheckmark.bind({});
MultipleSelectCheckmark.parameters = {
  docs: {
    source: {
      code: `const [personName, setPersonName] = React.useState([]);

      const handleChange = (event: SelectChangeEvent) => {
          const {
              target: { value },
          } = event;
          setPersonName(
              typeof value === 'string' ? value.split(',') : value,
          );
      };
      <div>
      <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
          <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(', ')}
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
  </div>`,
      language: "html",
    },
  },
};

export const MultipleSelectChip = SelectsMultipleChip.bind({});
MultipleSelectChip.parameters = {
  docs: {
    source: {
      code: `
      const [personName, setPersonName] = React.useState([]);

      const handleChange = (event: SelectChangeEvent) => {
          const {
              target: { value },
          } = event;
          setPersonName(
              // On autofill we get a stringified value.
              typeof value === 'string' ? value.split(',') : value,
          );
      };
      <div>
      <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
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
  </div>`,
      language: "html",
    },
  },
};

export const MultipleSelectPlaceholder = SelectsMultiplePlaceholder.bind({});
MultipleSelectPlaceholder.parameters = {
  docs: {
    source: {
      code: `
      const [personName, setPersonName] = React.useState([]);

      const handleChange = (event: SelectChangeEvent) => {
          const {
              target: { value },
          } = event;
          setPersonName(
              // On autofill we get a stringified value.
              typeof value === 'string' ? value.split(',') : value,
          );
      };
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

                  return selected.join(', ');
              }}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
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
  </div>`,
      language: "html",
    },
  },
};

export const GroupedSelect = SelectsGroup.bind({});
GroupedSelect.parameters = {
  docs: {
    source: {
      code: `  const [personName, setPersonName] = React.useState([]);
      const onTargetIdentityChange = event => {
          setPersonName(event.target.value);
      };
      const splitedIdenties = {
          Category1: [{ id: 12, age: "Option 1" }, { id: 13, age: "Option 2" }],
          Category2: [{ id: 14, age: "Option 1" }, { id: 15, age: "Option 2" }],
      };
      <Box sx={{ "width": "300px" }} >
      <FormControl fullWidth>
          <InputLabel htmlFor="grouped-select" sx={{ "backgroundColor": "#ffffff" }}  >Grouping</InputLabel>
          <Select id="grouped-select" label="Grouping" value={personName} onChange={onTargetIdentityChange} >
              {Object.keys(splitedIdenties).map(
                  (identityTypeKey, identityTypeIndex) => {
                      let children = [];

                      children.push(
                          <MenuItem disabled key={identityTypeIndex} value={identityTypeKey}>
                              {identityTypeKey}
                          </MenuItem>
                      );
                      splitedIdenties[identityTypeKey].forEach(identity => {
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
  </Box>`,
      language: "html",
    },
  },
};
