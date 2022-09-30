import AvatarComponent from "../components/avatar-component";

export default {
    title: 'Data Display/Avatar',
    component: AvatarComponent,
    argTypes: {
        type: {
            options: ['text', 'image'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['circular', 'rounded', 'square'],
            control: { type: 'radio' },
        },
    },
};

const Template = (args) => <AvatarComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    type:'text',
    avatarText:'Software Tester',
    src:'',
    width:24,
    height:24
}