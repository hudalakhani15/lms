import React, { useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import { signUpUser } from "../config/firebasemethods";
import Btn from "../components/Button";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let signUp = () => {
    signUpUser({
      email,
      password,
      userName: "Abdul Basit Ahmed",
      contact: "31234632",
    })
      .then((success) => {
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Box style={{ height: "100vh" }}>
        <Typography
          variant="h2"
          textAlign={"center"}
          margin={"20px"}
          gutterBottom
        >
   Sign up
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily:'inherit'
          }}
        >
          <TextField
            sx={{ width: "40ch", margin: "10px" }}
            label="Username"
            required
            variant="outlined"
          />
          <TextField
            sx={{ width: "40ch", margin: "10px" }}
            label="Email"
            type={"email"}
            required
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ width: "40ch", margin: "10px" }}
            label="Password"
            type={"password"}
            required
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
          />
          <TextField
            sx={{ width: "40ch", margin: "10px" }}
            label="Contact"
            required
            variant="outlined"
          />
          <Btn onClick={signUp}
           variant="contained"
           btnVal= "SIGNUP"
          />
        </Box>
      </Box>
    </div>
  );
}
