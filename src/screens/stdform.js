import React, { useState } from "react";
// For Snackbar
import { useRef } from 'react';
import SnackbarAlert from '../components/Snackbar';
// Customized Methods
import { sendData } from "../config/firebasemethods";
import { setDate } from "../core/helpermethods";
// Mui Components
import { Container } from "@mui/system";
import { Grid, Typography } from '@mui/material';
// Customized Mui Components
import Navbar from "../components/Navbar";
import Input from '../components/Input';
import Dropdown from "../components/Dropdown";
import Btn from '../components/Button';
import MuiDatePicker from "../components/DatePicker";


export default function StdForm() {
    // For Snackbar
    const [snackBarMsg, setSnackBarMsg] = useState({});
    const snackbarRef = useRef(null);

    // This object will contain submitted form data
    const [object, setObject] = useState({});
    const [stdData, setStdData] = useState({});

    // For displaying date in Datepicker field on screen
    const [dateOfBirth, setDateOfBirth] = useState(new Date('01/01/2000'));
    const [rollNo, setRollNo] = useState(1001); // For Roll No

    const handleDateChange = (date) => {
        const dateToStr = setDate(date);  // setDate (custom method) will convert selected date to string
        setDateOfBirth(dateToStr)
        fillObject('dateOfBirth', dateToStr)
    }

    // Saving form data in object
    const fillObject = (key, val) => {
        object[key] = val;
        setObject({ ...object });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh on submit

        // Saving some required entities inside the object
        object.rollNo = rollNo;
        object.age = "";
        object.registrationDate = setDate(new Date());  // setDate (custom method) will convert date to string
        object.isFeeSubmitted = false;
        object.isApproved = false;
        object.isActive = false;

        // Send data to database
        sendData(`Student Data/`, object)
            .then((res) => {
                // console.log(res);
                { snackbarRef.current.handleClick() }   // Snackbar function reference
                setSnackBarMsg({
                    type: "success",
                    message: "Registered Successfully.",
                })
                setStdData(object);
                console.log(stdData);
                setObject({
                    firstName: "",
                    lastName: "",
                    course: "",
                    section: '',
                    contact: "",
                    cnic: "",
                    fatherName: "",
                    fatherCnic: "",
                    fatherContact: "",
                    emergencyContact: "",
                    dateOfBirth: new Date('01/01/2000'),
                    id: "",
                    rollNo: "",
                    isActive: false,
                    isApproved: false,
                    isFeeSubmitted: false,
                    registrationDate: new Date(),
                })
                setRollNo(rollNo + 1);
            }).catch((err) => {
                console.log(err);
                { snackbarRef.current.handleClick() }   // Snackbar function reference
                setSnackBarMsg({
                    type: "error",
                    message: "Something went wrong. Please try again.",
                })
            })
    }


    return (
        <>
            <Navbar />
            <section>
                <form action="" onSubmit={handleSubmit}
                >
                    <Grid container className="formContainer" >

                        <Container sx={{ textAlign: "center", margin: "30px 0" }}>
                            <Typography variant='h4'>Student Registration Form</Typography>
                        </Container>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="First Name" value={object.firstName}
                                type="text" name="firstName" required={true}
                                onChange={(e) => fillObject('firstName', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Last Name" value={object.lastName}
                                type="text" name="lastName" required={true}
                                onChange={(e) => fillObject('lastName', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Dropdown
                                label="Course"
                                placeholder={"Select"}
                                value={object.course}
                                required={true}
                                onChange={(e) => fillObject('course', e.target.value)}
                                dataSource={[
                                    {
                                        id: "wm",
                                        fullName: "Web and Mobile",
                                    },
                                    {
                                        id: "ds",
                                        fullName: "Data Science",
                                    },
                                    {
                                        id: "gd",
                                        fullName: "Graphic Designing",
                                    }
                                ]}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Dropdown
                                label="Section"
                                placeholder={"Select"}
                                value={object.section}
                                required={true}
                                onChange={(e) => fillObject('section', e.target.value)}
                                dataSource={[
                                    {
                                        id: "a",
                                        fullName: "A",
                                    },
                                    {
                                        id: "b",
                                        fullName: "B",
                                    },
                                    {
                                        id: "c",
                                        fullName: "C",
                                    },
                                    {
                                        id: "d",
                                        fullName: "D",
                                    },
                                ]}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Contact" value={object.contact}
                                type="number" name="contact" required={true}
                                onChange={(e) => fillObject('contact', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="CNIC" value={object.cnic}
                                type="number" name="cnic" required={true}
                                onChange={(e) => fillObject('cnic', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Father Name" value={object.fatherName}
                                type="text" name="fatherName" required={true}
                                onChange={(e) => fillObject('fatherName', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Father CNIC" value={object.fatherCnic}
                                type="number" name="fatherCnic" // required={true}
                                onChange={(e) => fillObject('fatherCnic', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Father Contact" value={object.fatherContact}
                                type="number" name="fatherContact" required={true}
                                onChange={(e) => fillObject('fatherContact', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Emergency Contact" value={object.emergencyContact}
                                type="number" name="emergencyContact" required={true}
                                onChange={(e) => fillObject('emergencyContact', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={3}>
                            <MuiDatePicker
                                label="Date of Birth"
                                required={true}
                                value={dateOfBirth}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date'
                                }}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                        </Grid>

                        <Container sx={{ textAlign: "center", margin: "30px 0" }}>
                            <Btn type="submit" btnVal="Register" />
                            <SnackbarAlert ref={snackbarRef} severity={snackBarMsg.type} alertMsg={snackBarMsg.message} />
                        </Container>

                    </Grid>
                </form>

                {/* {stdData && Object.keys(stdData).length > 0
                    ?
                    <>
                    <Typography variant="p">{stdData.firstName}</Typography>
                    <Typography variant="p">{stdData.lastName}</Typography>
                    </>
                    : null} */}
                    
            </section>
        </>
    )
}