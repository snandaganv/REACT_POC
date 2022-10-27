import TransferListComponent from "../components/transfer-list-component";

export default {
    title: 'Feedback/TransferList',
    component: TransferListComponent,
    argTypes: {
        
    },
};

const Template = (args) => <TransferListComponent {...args}></TransferListComponent>;

export const Default = Template.bind({});

Default.args = {
    extendedTransferList: true,
    leftListText: 'Choices',
    rightListText: 'Chosen',
    leftListArray: ['item 1','item 2','item 3'],
    rightListArray: ['item 4','item 5','item 6'],
}