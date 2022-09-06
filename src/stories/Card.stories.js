import CardComponent from "../components/card-component";

export default {
    title: 'Feedback/Card',
    component: AlertComponent,
    argTypes: {
        closeText: '',
        variant: {
            options: ['outlined', 'filled', 'standard'],
            control: { type: 'radio' },
        },
        severity: {
            options: ['success', 'error', 'info', 'warning'],
            control: {type: 'radio'},
        },
        onClose: { action: 'closed' },
        children: [],
        raised: false
    }
};

const Template = (args) => <CardComponent {...args}>{args.children}</CardComponent>;

export const Default = Template.bind({});

Default.args = {
    closeText:'Close',
    children: 'I am an alert',
    raised: false,
}