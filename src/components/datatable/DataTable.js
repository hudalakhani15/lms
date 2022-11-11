import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { dataRows, dataColumns } from '../../datatablesource';
import './datatable.css'

export default function DataTable(props) {

  const { rows, columns } = props;
  // const actionColumn = [{
  //   field: 'action',
  //   headerName: 'Action',
  //   width: 200,
  //   renderCell: (params) => {
  //     return (
  //       <Box className={'cellAction'}>
  //       <Btn className={'viewBtn'} btnVal='View' />
  //       <Btn className={'deleteBtn'} btnVal='Delete' />
  //       </Box>
  //     )
  //   }}]
    
  return (
    <div style={{ width: '100%' }}>
      <DataGrid
      autoHeight
        rows={rows}
        columns={columns}
        // columns={columns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        // checkboxSelection
      />
    </div>
  );
}
