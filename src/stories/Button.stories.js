import Button from '@mui/material/Button';

export default {
    title: 'MUI/Button',
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
    },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});