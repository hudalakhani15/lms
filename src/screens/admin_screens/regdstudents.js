import React, { useEffect, useState } from 'react';
import DataTable from '../../components/datatable/DataTable'
import { getData } from '../../config/firebasemethods';
import { calcAge } from '../../core/helpermethods';
import { Box } from "@mui/system";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';


export default function RegdStudents() {

  const [stdData, setStdData] = useState([]);

  const getStdData = () => {
    getData(`Student Data`)
      .then((res) => {
        setStdData(res);
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getStdData()
  }, []);
  console.log(stdData);

  let columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    // {
    //   field: 'rollNo',
    //   headerName: 'Roll No',
    //   width: 100,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <p className={`cellWithStatus ${params.row.rollNo}`}>{params.row.rollNo}</p>
    //       </>
    //     )
    //   }
    // },
    { field: 'rollNo', headerName: 'Roll No', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'course', headerName: 'Course', width: 130 },
    { field: 'section', headerName: 'Sec', width: 50 },
    { field: 'contact', headerName: 'Contact', width: 130 },
    { field: 'cnic', headerName: 'CNIC', width: 130 },
    { field: 'fatherName', headerName: 'Father Name', width: 130 },
    { field: 'fatherCnic', headerName: 'Father CNIC', width: 130 },
    { field: 'fatherContact', headerName: 'Father Contact', width: 130 },
    { field: 'emergencyContact', headerName: 'Emergency Contact', width: 130 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 130 },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   width: 140,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <p className={`cellWithStatus ${params.row.dateOfBirth}`}>{calcAge(params.row.dateOfBirth)}</p>
    //       </>
    //     )
    //   }
    // },
    {
      field: 'isActive',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <p className={`cellWithStatus ${params.row.isActive}`}>{params.row.isActive ? 'Active' : 'Inactive'}</p>
          </>
        )
      }
    },
    {
      field: 'isApproved',
      headerName: 'Approval',
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <p className={`cellWithStatus ${params.row.isApproved}`}>{params.row.isApproved ? 'Approved' : 'Pending'}</p>
          </>
        )
      }
    },
    {
      field: 'isFeeSubmitted',
      headerName: 'Fee Status',
      width: 140,
      renderCell: (params) => {
        return (
          <>
            <p className={`cellWithStatus ${params.row.isFeeSubmitted}`}>{params.row.isFeeSubmitted ? 'Submitted' : 'Not Submitted'}</p>
          </>
        )
      }
    },
    // {
    //   field: 'user',
    //   headerName: 'User',
    //   width: 230,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Box className='cellWithImg'
    //           sx={{ display: 'flex', alignItems: 'center' }}
    //         >
    //           {params.row.image 
    //           ? <img
    //             style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', marginRight: '20px' }}
    //             className='cellImg' src={params.row.image} alt='avatar'
    //           /> 
    //           : <AccountCircleIcon
    //             sx={{ color: "grey", width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', marginRight: '20px' }}
    //           />}
    //           <p>{`${params.row.firstName} ${params.row.lastName}`}</p>
    //         </Box>
    //       </>
    //     )
    //   }
    // },
  ];

  return (
    <>
      {stdData && stdData.length > 0
        ? <Box>
          <Typography variant='h4'>Students List:</Typography>
          <DataTable rows={stdData} columns={columns} />
        </Box> : null}
    </>
  )
}