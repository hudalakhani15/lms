import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, details) {
  return { name, details };
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];


let tableData = {
  "age": "",
  "cnic": "56",
  "contact": "23",
  "course": "Data Science",
  "dateOfBirth": "1/20/2000",
  "emergencyContact": "45",
  "fatherCnic": "2",
  "fatherContact": "45",
  "fatherName": "sdr",
  "firstName": "ds",
  "id": "-NGH9JpXdVtcMDuxntlR",
  "isActive": false,
  "isApproved": false,
  "isFeeSubmitted": false,
  "lastName": "sd",
  "registrationDate": "11/7/2022",
  "rollNo": 1001,
  "section": "A"
}





export default function BasicTable(props) {

  const { row, cell, tableData } = props;
  let keys = Object.keys(tableData)
  let values = Object.values(tableData)
  console.log(keys);
  return (
    <>
      <strong>Students' Data</strong>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: "800px", margin: "20px auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Roll No</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Section</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>CNIC</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Father CNIC</TableCell>
              <TableCell>Father Contact</TableCell>
              <TableCell>Emergency Contact</TableCell>
              <TableCell>Date of Birth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>


            {tableData && Object.keys(tableData).length > 0
              ? tableData.map((e, i) => (
                <TableRow
                  key={tableData.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {tableData.firstName}
                  </TableCell>
                  <TableCell align="right">{tableData.firstName}</TableCell>
                </TableRow>
                ))
               : null}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}