//import { Alert } from "@mui/material";
import AlertComponent from "../components/alert-component";
import lifesphereLogo from "../assets/images/lifesphere-logo";

export default {
    title: 'Feedback/Alert',
    component: AlertComponent,
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
    parameters: {
        backgrounds: {
            default: 'Light Theme',
            values: [
                { name: 'Dark Theme', value: '#656B73' },
            ],
        },
    },
};

const Template = (args) => <AlertComponent {...args}> <lifesphereLogo /> I'm an Alert!</AlertComponent>;

export const Default = Template.bind({});

Default.args = {
    closeText:'',

}