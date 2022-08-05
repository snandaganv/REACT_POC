import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { PropTypes } from "prop-types";
import "./index.scss";

const DataTable = (props) => {
  const { height, ...rest } = props;

  return (
    <DataGrid
      {...rest}
      className="data-table-container"
      columnHeaderTitle
      onSortModelChange={props.onSortModelChange}
      onColumnVisibilityChange={props.onColumnVisibilityChange}
      onSelectionModelChange={props.onSelectionModelChange}
    />
  );
};

DataTable.prototype = {
  columns: PropTypes.array,
  checkboxSelection: PropTypes.bool,
  height: PropTypes.number,
  pageSize: PropTypes.number,
  rows: PropTypes.array,
};

DataTable.defaultProps = {
  columns: [],
  checkboxSelection: true,
  height: 300,
  onColumnVisibilityChange: () => {},
  onSelectionModelChange: () => {},
  onSortModelChange: () => {},
  pageSize: 5,
  rows: [],
};

export default DataTable;
