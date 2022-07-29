import { Breadcrumbs } from "@mui/material";
import BreadcrumbsComponent from "../components/breadcrumbs-component";
import Link from '@mui/material/Link';

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

const Template = (args) => <BreadcrumbsComponent {...args} onClick={args.onClick}>
    <Link  underline="hover" color="inherit" href="/">MUI</Link>
    <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core
  </Link>
  
    </BreadcrumbsComponent>;

export const Default = Template.bind({});
Default.args = {
    expandText:'Show Link',
    itemsAfterCollapse: 2,
    itemsBeforeCollapse: 2,
    maxItems: 6,
}