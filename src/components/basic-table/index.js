import * as React from 'react';
import { PropTypes } from "prop-types";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BasicTable = (props) => {

  const { columns, data, size } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size={size}>
        <TableHead>
          <TableRow>
            {
              columns && columns.map((title,index)=>{
                return <TableCell key={'header_'+index} align="right">{title}</TableCell>
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {
                columns && columns.map((title,index)=>{
                  return <TableCell key={'header_d_'+index} align="right">{row[title]}</TableCell>
                })
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

BasicTable.prototype = {
  columns: PropTypes.array,
  data: PropTypes.array,
  size: PropTypes.oneOf(["small", "large"]),
};

BasicTable.defaultProps = {
  columns : [],
  data : [],
  size : 'small',
};


export default BasicTable;