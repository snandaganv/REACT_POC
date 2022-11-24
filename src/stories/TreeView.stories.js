import { TreeViewsComponent } from "../components/tree-view-component";

export default {
    title: 'Feedback/TreeView',
    component: TreeViewsComponent,
    argTypes: {
    },
};

const TreeViewsComponentTemplate = (args) => <TreeViewsComponent {...args}></TreeViewsComponent>;

export const TreeViewComponent = TreeViewsComponentTemplate.bind({});

TreeViewComponent.args = {
    treeViwList: [{ 'itemName': 'Applicationss', nodeId: 1, items: [{ 'itemName': 'Calendar', nodeId: 2 }] }, { 'itemName': 'Documents', nodeId: 5, items: [{ 'itemName': 'OseS', nodeId: 4 }, { 'itemName': 'MU', nodeId: 8, items: [{ 'itemName': 'index.js', nodeId: 6 }] }] }],
    ariaLabel: 'tree view list',
    endIcon: 'close_square',
    expandIcon: 'expand_more_icon',
    collapseIcon: 'chevron_right_icon',
}