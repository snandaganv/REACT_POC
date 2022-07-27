import BreadcrumbsComponent from "../components/breadcrumbs-component";

export default {
    title: 'Navigation/Breadcrumbs',
    component: BreadcrumbsComponent,
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
        type: {
            options: ['text', 'password', 'number'],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'medium'],
            control: { type: 'radio' },
        },
        onChange: {action: 'onChange'},
    },
};

const Template = (args) => <BreadcrumbsComponent {...args} onChange={args.onChange} />;

export const Default = Template.bind({});
Default.args = {
    label:'UserName',
    type:'text',
    autoFocus: true,
    size:'small',
    fullWidth:true,
    multiline:false,
    helperText:'Username is mandatory',
    rows:3,
    color:'primary',
    variant:'outlined',
    error:false,
    disabled:false,
    defaultValue:'Please enter name'
}