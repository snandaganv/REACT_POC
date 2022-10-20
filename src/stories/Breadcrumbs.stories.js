
import BreadcrumbsComponent from "../components/breadcrumbs-component";


export default {
    title: 'Navigation/Breadcrumbs',
    component: BreadcrumbsComponent,
    argTypes: {
        expandText:'Show Link',
        itemsAfterCollapse: 2,
        itemsBeforeCollapse: 2,
        maxItems: 6,
        onClick: {action: 'onClick'},
    },
};

const Template = (args) => <BreadcrumbsComponent {...args} onClick={args.onClick}></BreadcrumbsComponent>;

export const Default = Template.bind({});
Default.args = {
    expandText:'Show Link',
    itemsAfterCollapse: 2,
    itemsBeforeCollapse: 2,
    maxItems: 3,
    separator:'›',
    linkArray:[{href: '/',label:'Core',icon:'navigate_next_icon'},{href: '/',label:'Core',icon:'home_icon'},{href: '/',label:'Core',icon:'navigate_next_icon'},{href: '/',label:'Core',icon:'navigate_next_icon'},{href: '/google.com',label:'MUI',icon:'calendar_view_day'},{href: '/material-ui/getting-started/installation/',label:'MUI',icon:'home_icon'},{href: '/material-ui/getting-started/installation/',label:'Core2',icon:'navigate_next_icon'}],
    color:'inherit',
    underline:'hover',
    separatorIcon: 'calendar_view_day'
}