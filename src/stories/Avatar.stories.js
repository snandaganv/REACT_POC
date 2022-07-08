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

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant:'rounded',
    alt:'Light House',
    src:"https://picsum.photos/id/870/200/300?grayscale&blur=2",
}