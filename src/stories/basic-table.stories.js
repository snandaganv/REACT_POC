import BasicTable from "../components/basic-table";

export default {
    title: 'Data Display/Tables',
    component: BasicTable,
    argTypes: {
        size: {
            options: ['small', 'large'],
            control: { type: 'select' }
        },
    },
};

const Template = (args) => <div className="css-1k9q6fl"><BasicTable {...args}></BasicTable></div>

export const Basic_Table = Template.bind({});
Basic_Table.storyName = 'Basic Table';
Basic_Table.args = {
    size:'small',
    columns: ['Name', 'Age', 'Country'],
    data: [{'Name':'Darshan', 'Age':30, 'Country':'USA'}, {'Name':'Tester', 'Age':45, 'Country':'India'}],    
};