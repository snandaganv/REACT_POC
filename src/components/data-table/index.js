import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { PropTypes } from "prop-types";
import './index.css';

const DataTable = (props) => {
  
  const {height, ...rest} = props;

  return (
    <div style={{ height: height, width: '100%', fontSize:'25' }}>
      <DataGrid {...rest}
        columnHeaderTitle
        onSortModelChange={props.onSortModelChange} 
        onColumnVisibilityChange={props.onColumnVisibilityChange} 
        onSelectionModelChange={props.onSelectionModelChange} />
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
  onColumnVisibilityChange:()=>{},
  onSelectionModelChange:()=>{},
  onSortModelChange:()=>{},
  pageSize : 5,
  rows : [],
};


export default DataTable;
