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

const SelectsBasicTemplate = (args) => <SelectsBasic {...args}></SelectsBasic>;
export const SelectBasic = SelectsBasicTemplate.bind({});
SelectBasic.args = {
  selectlabel: [{ label: "Name" }],
  size: "small",
  selectoptions: [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ],
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

const SelectsMultipleTemplate = (args) => (
  <SelectsMultiple {...args}></SelectsMultiple>
);
export const SelectMultiple = SelectsMultipleTemplate.bind({});
SelectMultiple.args = {
  selectlabel: [{ label: "Select" }],
  selectmultiple: [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
    { value: 4, label: "Option 4" },
    { value: 5, label: "Option 5" },
    { value: 6, label: "Option 6" },
    { value: 7, label: "Option 7" },
    { value: 8, label: "Option 8" },
    { value: 9, label: "Option 9" },
  ],
};

const SelectsMultipleCheckmarkTemplate = (args) => (
  <SelectsMultipleCheckmark {...args}></SelectsMultipleCheckmark>
);
export const SelectMultipleCheckmark = SelectsMultipleCheckmarkTemplate.bind(
  {}
);
SelectMultipleCheckmark.args = {
  names: [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
  ],
};

const SelectsMultipleChipTemplate = (args) => (
  <SelectsMultipleChip {...args}></SelectsMultipleChip>
);
export const SelectMultipleChip = SelectsMultipleChipTemplate.bind({});
SelectMultipleChip.args = {
  names: [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
  ],
};

const SelectsMultiplePlaceholderTemplate = (args) => (
  <SelectsMultiplePlaceholder {...args}></SelectsMultiplePlaceholder>
);
export const SelectMultiplePlaceholder =
  SelectsMultiplePlaceholderTemplate.bind({});
SelectMultiplePlaceholder.args = {
  names: [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
  ],
};

const SelectsGroupTemplate = (args) => <SelectsGroup {...args}></SelectsGroup>;
export const SelectGroup = SelectsGroupTemplate.bind({});
SelectGroup.args = {
  splitedIdenties: {
    Category1: [
      { id: 12, age: "Option 1" },
      { id: 13, age: "Option 2" },
    ],
    Category2: [
      { id: 14, age: "Option 1" },
      { id: 15, age: "Option 2" },
    ],
  },
};
