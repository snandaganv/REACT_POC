import TransferListComponent from "../components/transfer-list-component";

export default {
  title: "Feedback/TransferList",
  component: TransferListComponent,
  argTypes: {},
};

const Template = (args) => (
  <TransferListComponent {...args}></TransferListComponent>
);

export const Default = Template.bind({});

Default.args = {
  extendedTransferList: true,
  leftListText: "Choices",
  rightListText: "Chosen",
  leftListArray: ["item 1", "item 2", "item 3"],
  rightListArray: ["item 4", "item 5", "item 6"],
};

const HowToConsumeTransferListComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Circular Skeleton component ,just pass
      in the props when using the component .
    </code>
    <br />
    <br />
    <code>import {"{TransferListComponent}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>
      &lt;TransferListComponent {"{...props}"}&gt;&lt;/TransferListComponent&gt;
    </code>
  </div>
);
const TemplateDemo = (args) => (
  <HowToConsumeTransferListComponent
    {...args}
  ></HowToConsumeTransferListComponent>
);
export const HowToConsumeTransferListComponents = TemplateDemo.bind({});
