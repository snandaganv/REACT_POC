// import { Icon } from "@mui/material";
// import Home from "@mui/icons-material/Home";
import IconComponent from "../components/icon-component";

export default {
    title: 'Data Display/Icon',
    component: IconComponent,
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
    return <IconComponent {...args}>
                
            </IconComponent>
}

export const HomeIcon = Template.bind({});
HomeIcon.args = {
    fontSize: 'small',
    color: 'error',
}