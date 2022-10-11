
import { Select } from "@mui/material";
import {
    DefaultSelects,
    SelectBasics,
    SelectOtherProps,
    SelectVariants,
    SelectAutoWidt,
    SelectSizes,
    SelectLabels,
    MultipleSelects,
    MultipleSelectCheckmarks,
    MultipleSelectChips,
    MultipleSelectPlaceholders,
    GroupSelect,


} from "../components/select-component";


export default {
    title: 'Input/Select',
    component: Select,
    argTypes: {
        variant: {
            options: ["outlined", "standard", "filled"],
            control: { type: "radio" },
        },
    },
};
export const SelectDefault = DefaultSelects.bind({});
SelectDefault.args = {
    selectlabel: [{ label: 'Select' }],
    variant: "outlined",
    disabled: false,
    error: false,
    required: false,
    selectoptions: [{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }, { value: 3, label: 'Option 3' }],
};

export const BasicSelect = SelectBasics.bind({});
BasicSelect.args = {
    selectlabel: [{ label: 'Name' }],
    size: false,
    selectoptions: [{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }, { value: 3, label: 'Option 3' }],
};
export const SelectVariant = SelectVariants.bind({});
SelectVariant.args = {
    selectlabel: [{ label: 'Select' }],
    selectoptions: [{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }, { value: 3, label: 'Option 3' }],
};
export const SelectAutoWidth = SelectAutoWidt.bind({});
SelectAutoWidth.args = {
    selectlabel: [{ label: 'Sort' }],
    autowidth: [{ value: 1, label: 'Options' }, { value: 2, label: 'Option Two' }, { value: 3, label: 'Option Twenty' }],
};
export const SelectSize = SelectSizes.bind({});
SelectSize.args = {
    selectlabel: [{ label: 'Name' }],
    selectoptions: [{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }, { value: 3, label: 'Option 3' }],
};
export const SelectLabel = SelectLabels.bind({});
SelectLabel.args = {
    selectlabel: [{ label: 'Select' }],
    selectoptions: [{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }, { value: 3, label: 'Option 3' }],
};

export const SelectOtherProp = SelectOtherProps.bind({});
SelectOtherProp.args = {
    selectlabel: [{ label: 'Select' }],
    selectoptions: [{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }, { value: 3, label: 'Option 3' }],
};
export const MultipleSelect = MultipleSelects.bind({});
MultipleSelect.args = {
    selectlabel: [{ label: 'Select' }],
    selectmultiple: [{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option222 2' }, { value: 3, label: 'Option 3' }, { value: 4, label: 'Option 4' }, { value: 5, label: 'Option 5' }, { value: 6, label: 'Option 6' }, { value: 7, label: 'Option 7' }, { value: 8, label: 'Option 8' }, { value: 9, label: 'Option 9' }],
};

export const MultipleSelectCheckmark = MultipleSelectCheckmarks.bind({});

export const MultipleSelectChip = MultipleSelectChips.bind({});

export const MultipleSelectPlaceholder = MultipleSelectPlaceholders.bind({});

export const GroupedSelect = GroupSelect.bind({});




