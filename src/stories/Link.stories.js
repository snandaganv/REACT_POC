import LinkComponent from "../components/link-component";

export default {
    title: 'Feedback/Link',
    component: LinkComponent,
    argTypes: {
        children: [],
        color: {
            options: ["primary", "secondary"],
            control: { type: "radio" },
        },
        
        underline: {
            options: ['always', 'hover', 'none'],
            control: {type: 'radio'},
        },
        variant: {
            options: ['body1', 'body2', 'button','caption','inherit','overline','subtitle1','subtitle2'],
            control: { type: 'radio' },
        },
        href:'',
        

    },
};

const Template = (args) => <LinkComponent {...args}>{args.children}</LinkComponent>;

export const Default = Template.bind({});

Default.args = {
    color: 'primary',
    children: 'I am an Link',
    href:'',
}