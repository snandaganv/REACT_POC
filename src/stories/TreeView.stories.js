import TreeViewComponent from "../components/tree-view-component";

export default {
  title: "Feedback/TreeView",
  component: TreeViewComponent,
  argTypes: {},
};

const Template = (args) => <TreeViewComponent {...args}></TreeViewComponent>;

export const Default = Template.bind({});

Default.args = {
  treeViwList: [
    {
      itemName: "Applicationss",
      nodeId: 1,
      items: [{ itemName: "Calendar", nodeId: 2 }],
    },
    {
      itemName: "Documents",
      nodeId: 5,
      items: [
        { itemName: "OseS", nodeId: 4 },
        {
          itemName: "MU",
          nodeId: 8,
          items: [{ itemName: "index.js", nodeId: 6 }],
        },
      ],
    },
  ],
  ariaLabel: "tree view list",
  endIcon: "close_square",
  expandIcon: "expand_more_icon",
  collapseIcon: "chevron_right_icon",
};

const HowToConsumeTreeViewComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Circular TreeView component ,just pass
      in the props when using the component .
    </code>
    <br />
    <br />
    <code>import {"{TreeViewComponent}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>
      &lt;TreeViewComponent {"{...props}"}&gt;&lt;/TreeViewComponent&gt;
    </code>
  </div>
);
const TemplateDemo = (args) => (
  <HowToConsumeTreeViewComponent {...args}></HowToConsumeTreeViewComponent>
);
export const HowToConsumeTreeViewComponents = TemplateDemo.bind({});
