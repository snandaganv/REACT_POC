// import { Icon } from "@mui/material";
// import Home from "@mui/icons-material/Home";
import MenuIconsComponent from "../components/menu-icons-component";
//import MenuIcon from '@mui/icons-material/Menu';

export default {
    title: 'Data Display/Icons',
    component: MenuIconsComponent,
    argTypes: {
        fontSize: {
            options: ['inherit','large', 'medium', 'small'],
            control: { type: 'radio' },
        },
        theme: {
            options: ['outlined', 'filled', 'rounded','twotone','sharp'],
            control: { type: 'radio' },
        },
    },
};

const Template = (args) => {
    return <MenuIconsComponent {...args}>
                
            </MenuIconsComponent>
}


export const Default = Template.bind({});

Default.args = {
    theme:'rounded',
    fontSize: 'large',
}