
// import Select from '../components/Select-component';
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
            options: ["standard", "filled"],
            control: { type: "radio" },
        },
        // size: {
        //     options: ["small", "medium"],
        //     control: { type: "radio" },
        // },
    },
};
export const SelectDefault = DefaultSelects.bind({});
SelectDefault.args = {
    selectname: [{ label: 'Select' }],
    variant: "standard",
    disabled: false,
    error: false,
    required: false,
    size: false,
    selectoptions: [{ label: 'option1', label: 'option2', label: 'option3' }],
};

export const BasicSelect = SelectBasics.bind({});
BasicSelect.args = {
    selectname: [{ label: 'Name' }],
    size: false,
};
export const SelectVariant = SelectVariants.bind({});
SelectVariant.args = {
    selectname: [{ label: 'Select' }],
};
export const SelectAutoWidth = SelectAutoWidt.bind({});
SelectAutoWidth.args = {
    selectname: [{ label: 'Age' }],
};
export const SelectSize = SelectSizes.bind({});

export const SelectLabel = SelectLabels.bind({});

export const SelectOtherProp = SelectOtherProps.bind({});

export const MultipleSelect = MultipleSelects.bind({});

export const MultipleSelectCheckmark = MultipleSelectCheckmarks.bind({});

export const MultipleSelectChip = MultipleSelectChips.bind({});

export const MultipleSelectPlaceholder = MultipleSelectPlaceholders.bind({});

export const GroupedSelect = GroupSelect.bind({});

// export const Testin = Testing.bind({});


