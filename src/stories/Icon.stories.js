import { Icon } from "@mui/material";
import Home from "@mui/icons-material/Home";

export default {
    title: 'Data Display/Icon',
    component: Icon,
    argTypes: {
        fontSize: {
            options: ['inherit', 'small', 'large'],
            control: { type: 'radio' },
        },
        color: {
            options: ['primary', 'secondary', 'action', 'error', 'disabled'],
            control: { type: 'select' },
        },
    },
};

const Template = (args) => {
    return <Icon {...args}>
                <Home></Home>
            </Icon>;
}

export const HomeIcon = Template.bind({});
HomeIcon.args = {
    fontSize: 'small',
    color: 'error',
}