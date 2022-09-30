
import MenuIconsComponent from "../components/menu-icons-component";
import {Menu,Search} from '@mui/icons-material/';

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
    return <MenuIconsComponent childComponent={(data) => <Menu {...data} />} {...args}>
                
            </MenuIconsComponent>
}


export const MenuIcons = Template.bind({});
MenuIcons.storyName= 'Menu Icon';
MenuIcons.args = {
    theme:'rounded',
    fontSize: 'large',
}