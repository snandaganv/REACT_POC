import TabsComponent from "../components/tabs-component";

export default {
    title: 'Feedback/Tabs',
    component: TabsComponent,
    argTypes: {
        children: [],
        indicatorColor: 'secondary',
        allowScrollButtonsMobile: false,
        onChange: {
            action: "change",
        },
        centered: false,
        orientation: 'horizontal',
        textColor: 'primary'
    },
};

const Template = (args) => <TabsComponent {...args}></TabsComponent>;

export const Default = Template.bind({});

Default.args = {
    indicatorColor:'primary',
    allowScrollButtonsMobile: true,
    ariaLabel: 'Story book Tabs',
    centered:false,
    orientation:'horizontal',
    textColor:'secondary',
    tabsArray:[{index: 0,label:'Item First'},{index: 1,label:'Item Second'},{index: 2,label:'Item Third'}],
    scrollButtons: 'auto',
    variant:'scrollable'
}