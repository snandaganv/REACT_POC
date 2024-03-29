import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { PropTypes } from "prop-types";
import "./index.scss";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';

const DataTable = (props) => {
  const { height,width, ...rest } = props;

  return (
    <ThemeProvider theme={muiTheme}>
    <div style={{ height:height,width: width }}>
    <DataGrid
      {...rest}
      className="data-table-container"
      columnHeaderTitle
      onSortModelChange={props.onSortModelChange}
      onColumnVisibilityChange={props.onColumnVisibilityChange}
      onSelectionModelChange={props.onSelectionModelChange}
    />
    </div>
    </ThemeProvider>
  );
};

DataTable.prototype = {
  columns: PropTypes.array,
  checkboxSelection: PropTypes.bool,
  height: PropTypes.number,
  width:PropTypes.number,
  pageSize: PropTypes.number,
  rows: PropTypes.array,
};

DataTable.defaultProps = {
  columns: [],
  checkboxSelection: true,
  height: 300,
  width: 300,
  onColumnVisibilityChange: () => {},
  onSelectionModelChange: () => {},
  onSortModelChange: () => {},
  pageSize: 5,
  rows: [],
};

export default DataTable;
