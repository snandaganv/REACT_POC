import { Button } from '@mui/material';

export default {
    title: 'Input/Button',
    component: Button,
    argTypes: {
        variant: {
          options: ['contained', 'outlined', 'text'],
          control: { type: 'radio' },
        },
        color: {
            options: ['primary', 'success', 'secondary', 'error', 'info', 'warning'],
            control: { type: 'radio' },
        },
        onClick: { action: 'clicked' },
    },
    parameters: {
        backgrounds: {
            default: 'Light Theme',
            values: [
                { name: 'Dark Theme', value: 'grey' },
            ],
        },
    },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});