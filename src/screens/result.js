import React, { useState, useEffect } from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import { getData } from "../config/firebasemethods";
import Navbar from "../components/Navbar";

export default function Result() {
    const [allResults, setAllResults] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [dropDownList, setDropDownList] = useState([]);
    const [resultTableData, setResultTableData] = useState([]);

    let getResultData = () => {
        getData(`Result`)
            .then((res) => {
                console.log(res);
                let arr = res.filter((x) => x.isShowResult);
                setAllResults([...arr]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let showResult = (e) => {
        setSelectedCourse(e);
        let obj = allResults.find((x) => x.course == e);
        console.log(obj);
        setResultTableData([...obj.result]);
    };

    useEffect(() => {
        getResultData();
    }, []);


    return (
        <>
            <Navbar />

            <Box>

                <form action="">
                    <Grid container className="formContainer" >

                        <Container sx={{ textAlign: "center", margin: "10px 0" }}>
                            <Typography variant='h4'>Result</Typography>
                        </Container>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Dropdown
                                label="Course"
                                valueField="course"
                                displayField="course"
                                onChange={(e) => showResult(e.target.value)}
                                datasource={allResults}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Enter Roll Number"
                                // value={object.rollNo}
                                type="text" name="rollNo" required={true}
                                // onChange={(e) => fillObject('rollNo', e.target.value)}
                            />
                        </Grid>

                        <table>
                            {resultTableData && resultTableData.length > 0 ? (
                                resultTableData.map((x, i) => (
                                    <tr key={i}>
                                        <td>{x.rollNum}</td>
                                        <td>{x.name}</td>
                                        <td>{x.result}</td>
                                        <td>{x.marks}</td>
                                    </tr>
                                ))
                            ) : (
                                <h1>No Result</h1>
                            )}
                        </table>
                    </Grid>
                </form>

            </Box>
        </>
    );
}