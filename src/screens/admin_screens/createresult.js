import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Btn from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import MuiSwitch from "../../components/Switch";
import { sendData, getData } from "../../config/firebasemethods";


export default function CreateResult() {

  const [object, setObject] = useState({});
  const [courseStatus, setCourseStatus] = useState(false);
  const [resultData, setResultData] = useState([
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC100",   
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC101",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC102",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC103",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC104",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC105",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC106",
      result: "Pass",
    },
  ]);
  const [resultTableData, setResultTableData] = useState([]);
  const [loader, setLoader] = useState(false);


  let handleSubmit = () => {
    setLoader(true);
    object.isShowResult = courseStatus;
    object.result = resultData;
    console.log(object);
    sendData(`Result/`, object)
      .then((res) => {
        setLoader(false);
        console.log(res);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  let getResultData = () => {
    getData("Result")
      .then((res) => {
        console.log(res);
        setResultTableData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getResultData();
  }, []);


  return (
    <>
      <Box>
        <form action="" onSubmit={handleSubmit}
        >
          <Grid container className="formContainer" >

            <Container sx={{ textAlign: "center", margin: "10px 0" }}>
              <Typography variant='h4'>Result</Typography>
            </Container>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <MuiSwitch
                value={courseStatus}
                onChange={(e) => setCourseStatus(e.target.checked)}
                label="Course"
              />
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Dropdown
                label="Course"
                value={object.course}
                required={true}
                onChange={(e) => setObject({ ...object, course: e.target.value })}
                dataSource={[
                  {
                    id: "wm",
                    fullName: "Web and Mobile",
                  },

                  {
                    id: "gd",
                    fullName: "Graphic Designing",
                  },
                  {
                    id: "ve",
                    fullName: "Video Editing",
                  },
                ]}
              />
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Box>
                <table>
                  {resultData.map((e, i) => (
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.rollNum}</td>
                      <td>{e.result}</td>
                      <td>{e.marks}</td>
                    </tr>
                  ))}
                </table>
              </Box>
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Btn loading={loader} btnVal="Submit" onClick={handleSubmit} />
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Box>
                <table>
                  {resultTableData.map((x, i) => (
                    <tr>
                      <td>{x.result.length}</td>
                      <td>
                        <Dropdown
                          valuefield="id"
                          displayField="fullName"
                          value={x.course}
                          dataSource={[
                            {
                              id: "wm",
                              fullName: "Web and Mobile",
                            },
                            {
                              id: "gd",
                              fullName: "Graphics Designing",
                            },
                          ]}
                        />
                      </td>
                      <td>
                        <MuiSwitch
                          onChange={(e) => {
                            resultTableData[i].isShowResult = e.target.checked;
                          }}
                          value={x.isShowResult}
                        />
                      </td>
                    </tr>
                  ))}
                </table>
              </Box>
            </Grid>



          </Grid>
        </form>


      </Box>
    </>
  )
}