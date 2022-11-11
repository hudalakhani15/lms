import React, { useState, useEffect } from 'react'
// For Snackbar
import { useRef } from 'react';
import SnackbarAlert from '../../components/Snackbar';
// Customized Methods
import { getData, sendData } from "../../config/firebasemethods";
import { setDate } from "../../core/helpermethods";
// Mui Components
import { Container } from "@mui/system";
import { Box, Grid, Typography } from '@mui/material';
// Customized Mui Components
import Navbar from "../../components/Navbar";
import Input from '../../components/Input';
import Dropdown from "../../components/Dropdown";
import Btn from '../../components/Button';
import MuiDatePicker from "../../components/DatePicker";
import DataTable from '../../components/datatable/DataTable';


export default function CourseForm() {

  // For Snackbar
  const [snackBarMsg, setSnackBarMsg] = useState({});
  const snackbarRef = useRef(null);

  // This object will contain submitted form data
  const [object, setObject] = useState({});
  const [asstTrainer, setAsstTrainer] = useState('');
  const [asstTrainersArr, setAsstTrainersArr] = useState([]);

  // All Courses from Database
  const [courses, setCourses] = useState([]);

  let addAsstTrainers = () => {
    setAsstTrainersArr([...asstTrainersArr, asstTrainer]);
  };

  // Saving form data in object
  const fillObject = (key, val) => {
    object[key] = val;
    setObject({ ...object });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on submit

    // Saving some required entities inside the object
    object.isFormOpen = false;
    object.assistantTrainers = asstTrainersArr;

    // Send data to database
    sendData(`Result/`, object)
      .then((res) => {
        // console.log(res);
        { snackbarRef.current.handleClick() }   // Snackbar function reference
        setSnackBarMsg({
          type: "success",
          message: "Form Submitted Successfully.",
        })

        setObject({
          courseName: "",
          courseDuration: "",
          isFormOpen: false,
          noOfQuizzes: "",
          feeInRupees: "",
          leadTrainerId: "",
          assistantTrainers: [],
        })
        setAsstTrainersArr([]);

      }).catch((err) => {
        console.log(err);
        { snackbarRef.current.handleClick() }   // Snackbar function reference
        setSnackBarMsg({
          type: "error",
          message: "Something went wrong. Please try again.",
        })
      })
  }

  const getAllCourses = () => {
    getData(`Result`)
      .then((res) => {
        setCourses(res);
      }).catch((err) => {
        console.log(err);
      })
  }

  let columns = [
    { field: 'courseName', headerName: 'Course Name', width: 150 },
    { field: 'courseDuration', headerName: 'Course Duration', width: 130 },
    { field: 'isFormOpen', headerName: 'Is Form Open', width: 110 },
    { field: 'noOfQuizzes', headerName: 'No of Quizzes', width: 110 },
    { field: 'feeInRupees', headerName: 'Fee in Rupees', width: 115 },
    { field: 'leadTrainerId', headerName: 'Lead Trainer Id', width: 120 },
    { field: 'assistantTrainers', headerName: 'Assistant Trainers', width: 250 },
  ];

  useEffect(() => {
    getAllCourses()
  }, []);


  return (
    <>
      <section>
        <form action="" onSubmit={handleSubmit}
        >
          <Grid container className="formContainer" >

            <Container sx={{ textAlign: "center", margin: "10px 0" }}>
              <Typography variant='h4'>Course Form</Typography>
            </Container>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Input label="Course Name" value={object.courseName}
                type="text" name="courseName" required={true}
                onChange={(e) => fillObject('courseName', e.target.value)}
              />
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Input label="Course Duration (in months)" value={object.courseDuration}
                type="number" name="courseDuration" required={true}
                onChange={(e) => fillObject('courseDuration', e.target.value)}
              />
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Input label="Is Form Open" value={object.isFormOpen}
                type="text" name="isFormOpen" required={true}
                onChange={(e) => fillObject('isFormOpen', e.target.value)}
              />
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Input label="No of Quizzes" value={object.noOfQuizzes}
                type="number" name="noOfQuizzes" required={true}
                onChange={(e) => fillObject('noOfQuizzes', e.target.value)}
              />
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Input label="Fee In Rupees" value={object.feeInRupees}
                type="number" name="feeInRupees"  // required={true}
                onChange={(e) => fillObject('feeInRupees', e.target.value)}
              />
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Input label="Lead Trainer Id" value={object.leadTrainerId}
                type="text" name="leadTrainerId" // required={true}
                onChange={(e) => fillObject('leadTrainerId', e.target.value)}
              />
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Input label="Assistant Trainers" value={object.assistantTrainers}
                type="text" name="assistantTrainers" // required={true}
                onChange={(e) => setAsstTrainer(e.target.value)}
              />
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              {asstTrainersArr.map((x, i) => (
                <>
                  {/* <Box> */}
                  <Typography m={2} variant="p">{x}</Typography>
                  {/* </Box> */}
                </>
              ))}
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Btn onClick={addAsstTrainers} btnVal="Add" />
            </Grid>

            <Container sx={{ textAlign: "center", margin: "30px 0" }}>
              <Btn type="submit" btnVal="Submit" />
              <SnackbarAlert ref={snackbarRef} severity={snackBarMsg.type} alertMsg={snackBarMsg.message} />
            </Container>

          </Grid>
        </form>


        {courses && courses.length > 0
          ? <Box>
            <Typography variant='h4'>List of Courses:</Typography>
            <DataTable rows={courses} columns={columns} />
          </Box> : null}

      </section>
    </>
  )
}