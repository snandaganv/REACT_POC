import { Alert, radioClasses } from "@mui/material";

export default {
    title: 'Feedback/Alert',
    component: Alert,
    argTypes: {
        closeText: 'Close',
        variant: {
            options: ['outlined', 'filled', 'standard'],
            control: { type: 'radio' },
        },
        severity: {
            options: ['success', 'error', 'info', 'warning'],
            control: {type: 'radio'},
        },
        onClose: { action: 'closed' },
    },
};

const Template = (args) => <Alert {...args}>I'm an Alert</Alert>;

export const Default = Template.bind({});