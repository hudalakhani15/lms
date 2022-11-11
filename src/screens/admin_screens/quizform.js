import React, { useState, useEffect } from 'react'
// For Snackbar
import { useRef } from 'react';
import SnackbarAlert from '../../components/Snackbar';
// Customized Methods
import { sendData, getData } from '../../config/firebasemethods';
// Mui Components
import { Box, Container, FormControlLabel, Grid, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
// Customized Mui Components
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Btn from "../../components/Button";
import DataTable from '../../components/datatable/DataTable';

export default function QuizForm() {

  // For Snackbar
  const [snackBarMsg, setSnackBarMsg] = useState({});
  const snackbarRef = useRef(null);

  const [isCreateQuiz, setIsCreateQuiz] = useState(false);
  const [question, setQuestion] = useState('');
  const [questionsArr, setQuestionsArr] = useState([]);
  const [option, setOption] = useState('');
  const [optionsArr, setOptionsArr] = useState([]);
  const [object, setObject] = useState({});

  // let arr = [
  //   {
  //     id: 1,
  //     display: "abc",
  //   },
  //   {
  //     id: 2,
  //     display: "abc",
  //   },
  //   {
  //     id: 3,
  //     display: "abc",
  //   },
  // ];

  let createQuiz = (e) => {
    e.preventDefault(); // Prevent page refresh on submit
    setIsCreateQuiz(true);
    // object.questions = [];

  };

  let fillObject = (key, val) => {
    object[key] = val;
    setObject({ ...object });
  };

  let addOption = () => {
    setOptionsArr([...optionsArr, option]);
  };

  let addQuestion = () => {
    question.options = optionsArr
    question.correctAns = "Correct Ans"
    setQuestionsArr([...questionsArr, question]);
    // console.log("question");
    // console.log(question);
    // console.log("optionsArr");
    // console.log(optionsArr);
    // setOptionsArr([])
  };
  console.log(object);
  // console.log(questionsArr);

  let submitQuestion = () => {
    console.log("submit Quest");
  };

  let lockQuiz = () => {
    console.log();
  };

  let submitQuiz = (e) => {
    e.preventDefault(); // Prevent page refresh on submit
    setIsCreateQuiz(false);
    console.log("Quiz Submitted");

    // Saving some required entities inside the object
    object.questions = [...questionsArr];
    console.log(object);

    // Send data to database
    sendData(`Quizzes/`, object)
      .then((res) => {
        // console.log(res);
        { snackbarRef.current.handleClick() }   // Snackbar function reference
        setSnackBarMsg({
          type: "success",
          message: "Form Submitted Successfully.",
        })

        setObject({
          quizName: "",
          quizDuration: "",
          course: "",
          totalMarks: "",
          questions: [],
        })
        // setAsstTrainersArr([]);

      }).catch((err) => {
        console.log(err);
        { snackbarRef.current.handleClick() }   // Snackbar function reference
        setSnackBarMsg({
          type: "error",
          message: "Something went wrong. Please try again.",
        })
      })
  };

  const [quizzes, setQuizzes] = useState([]);

  const getAllQuizzes = () => {
    getData(`Quizzes`)
      .then((res) => {
        setQuizzes(res);
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getAllQuizzes()
  }, []);

  let columns = [
    { field: 'quizName', headerName: 'Quiz Name', width: 150 },
    { field: 'quizDuration', headerName: 'Quiz Duration', width: 130 },
    { field: 'course', headerName: 'Course', width: 150 },
    { field: 'totalMarks', headerName: 'Total Marks', width: 110 },
    // { field: 'questions', headerName: 'Questions', width: 115 },
  ];


  return (
    <>
      <Box>

        <form action="" onSubmit={createQuiz}>
          <Grid container className="formContainer" >

            <Container sx={{ textAlign: "center", margin: "10px 0" }}>
              <Typography variant='h4'>Quiz Form</Typography>
            </Container>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Input label="Quiz Name" value={object.quizName}
                type="text" name="quizName" required={true}
                onChange={(e) => fillObject('quizName', e.target.value)}
              />
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Input label="Quiz Duration (in minutes)" value={object.quizDuration}
                type="number" name="quizDuration" required={true}
                onChange={(e) => fillObject('quizDuration', e.target.value)}
              />
            </Grid>

            <Grid item xs={9} sm={5} m={1} my={2}>
              <Dropdown
                label="Course"
                value={object.course}
                disabled={isCreateQuiz}
                required={true}
                onChange={(e) => fillObject('course', e.target.value)}
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
              <Input label="Total Marks" value={object.totalMarks}
                type="number" name="totalMarks" required={true}
                onChange={(e) => fillObject('totalMarks', e.target.value)}
              />
            </Grid>

            <Container sx={{ textAlign: "center", margin: "30px 0" }}>
              <Btn type="submit" btnVal="Create Quiz" />
            </Container>

          </Grid>
        </form>

        {isCreateQuiz && (

          <form action="" onSubmit={submitQuiz}>
            <Grid container className="formContainer">

              <Container sx={{ textAlign: "left", margin: "10px 0" }}>
                <Typography variant='h5'>Create Questions</Typography>
              </Container>

              <Grid item xs={12} sm={12} md={12} m={1} my={2}>
                <Input
                  onChange={(e) => {
                    setQuestion({ ...question, question: e.target.value });
                  }}
                  label="Question"
                />
              </Grid>
              <Grid item lg={12} m={1} my={2}>
                {optionsArr.map((x, i) => (
                  <>
                    <FormControlLabel
                      label={x}
                      control={<Checkbox
                        //  checked={checked[0]}
                        onChange={(e) => (x.isChecked = e.target.value)} />}
                    />
                  </>
                ))}
              </Grid>
              <Grid md={8} item>
                <Input
                  onChange={(e) => setOption(e.target.value)}
                  label="Option"
                />
              </Grid>

              <Btn onClick={addOption} btnVal="Add" />

              <Container sx={{ textAlign: "center", margin: "30px 0" }}>
                <Grid md={12} item>
                  <Btn onClick={addQuestion} btnVal="Add Question" />
                  <Btn onClick={lockQuiz} btnVal="Lock Quiz" />
                  <Btn type="submit" btnVal="Submit Quiz" />
                  <SnackbarAlert ref={snackbarRef} severity={snackBarMsg.type} alertMsg={snackBarMsg.message} />
                </Grid>
              </Container>
            </Grid>

          </form>
        )}


        {quizzes && quizzes.length > 0 
          ? <Box>
          <Typography variant='h4'>All Quizzes:</Typography>
          <DataTable rows={quizzes} columns={columns} />
        </Box> : null}
      </Box>
    </>
  );
}