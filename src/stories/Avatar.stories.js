import { Avatar } from "@mui/material";

export default {
    title: 'Data Display/Avatar',
    component: Avatar,
    argTypes: {
        variant: {
            options: ['circular', 'rounded', 'square'],
            control: { type: 'radio' },
        },
    },
};

const Template = (args) => <Avatar alt="Light House" src="https://picsum.photos/id/870/200/300?grayscale&blur=2" {...args} />;

export const Default = Template.bind({});