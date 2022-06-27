import { TextField } from "@mui/material";

export default {
    title: 'Input/TextField',
    component: TextField,
    argTypes: {
        autoFocus: true,
        defaultValue: 'TextField',
        disabled: {
            options: [true, false],
            control: { type: 'select' },
        },
        error: {
            options: [true, false],
            control: { type: 'select' },
        },
        variant: {
            options: ['outlined', 'filled', 'standard'],
            control: { type: 'radio' },
        },
        color: {
            options: ['primary', 'secondary', 'error', 'success', 'warning', 'info'],
            control: { type: 'radio' },
        },
        onChange: {action: 'text field input'},
    },
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});