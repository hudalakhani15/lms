import { Button, Grid, Input, Table, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";

import { getData } from "../config/firebasemethods";
import Dropdown from "../components/Dropdown";

function Result() {
  const [allResults, setAllResults] = useState([]);
  const [selectedCource, setSelectedCource] = useState("");
  // const [dropDownList, setDropDownList] = useState([]);
  const [resultTableData, setResultTableData] = useState([]);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 180,
      headerClassName: "table-header",
    },
    {
      field: "rollNum",
      headerName: "Roll Number",
      headerClassName: "table-header",
      width: 200,
      editable: true,
    },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "table-header",
      width: 135,
      editable: true,
    },
    {
      field: "result",
      headerName: "Result",
      headerClassName: "table-header",
      width: 135,
      editable: true,
    },
    {
      field: "marks",
      headerName: "Marks",
      type: "number",
      headerClassName: "table-header",
      width: 140,
      editable: true,
    },
  ];
  const [inputVal, setInput] = useState("");
  const [getRollResult, setRollResult] = useState([]);

  let getResultData = () => {
    getData("results")
      .then((res) => {
        console.log(res);
        let arr = res.filter((x) => x.isShowResult);
        setAllResults([...arr]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getResultData();
    console.log(resultTableData);
  }, []);

  let showResult = (e) => {
    setSelectedCource(e);
    let obj = allResults.find((x) => x.course == e);
    console.log(obj);
    setResultTableData([...obj.result]);
  };

  const filterByRoll = () => {
    let arr = resultTableData.filter(
      (x) => x.rollNum.toLowerCase() == inputVal.toLowerCase()
    );
    if (arr.length == 0) {
      alert("No Result Found");
    } else {
      console.log(arr);
      setRollResult([...arr]);
    }
  };

  return (
    <>
      <Typography
        textAlign={"center"}
        variant="h2"
        gutterBottom
        margin={"10px"}
        color={"primary"}
        fontWeight="bolder"
      >
        Results
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={6} sm={12} xs={12}>
            <Dropdown
              label="Course"
              valueField="course"
              displayField="course"
              data={allResults}
              onChange={(e) => showResult(e.target.value)}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Input
              fullWidth={false}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              label="Enter Roll Number"
            />
            <Button margin="10px 0px" label="Find" onClick={filterByRoll} />
          </Grid>
        </Grid>

        {getRollResult && getRollResult.length > 0 ? (
          <Box>
            <Table rows={getRollResult} columns={columns} />
          </Box>
        ) : null}

        <Box>
          {resultTableData && resultTableData.length > 0 ? (
            <Table rows={resultTableData} columns={columns} />
          ) : null}
        </Box>
      </Container>
    </>
  );
}

export default Result;