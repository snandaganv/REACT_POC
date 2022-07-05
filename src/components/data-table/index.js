import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { PropTypes } from "prop-types";

const DataTable = (props) => {
  
  const {height, ...rest} = props;

  return (
    <div style={{ height: height, width: '100%' }}>
      <DataGrid {...rest} />
    </div>
  );
}

DataTable.prototype = {
  columns: PropTypes.array,
  checkboxSelection: PropTypes.bool,
  height: PropTypes.number,
  pageSize: PropTypes.number,
  rows: PropTypes.array,
};

DataTable.defaultProps = {
  columns : [],
  checkboxSelection : true,
  height : 300,
  pageSize : 5,
  rows : [],
};


export default DataTable;
