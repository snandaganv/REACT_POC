import { TransfersListComponent } from "../components/transfer-list-component";

export default {
    title: 'Feedback/TransferList',
    component: TransfersListComponent,
    argTypes: {

    },
};

const TransfersListComponentTemplate = (args) => <TransfersListComponent {...args}></TransfersListComponent>;

export const TransferListComponent = TransfersListComponent.bind({});

TransferListComponent.args = {
    extendedTransferList: true,
    leftListText: 'Choices',
    rightListText: 'Chosen',
    leftListArray: ['item 1', 'item 2', 'item 3'],
    rightListArray: ['item 4', 'item 5', 'item 6'],
}