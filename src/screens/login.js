import { TextField, Box, Typography,  } from "@mui/material";
import React, { useState } from "react";
import { loginUser } from "../config/firebasemethods";
import Btn from "../components/Button"
export default function Login()

{
  
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

let login = () => {
  loginUser({
    email,
    password,
  })
    .then((success) => {
      console.log(success);
    })
    .catch((err) => {
      console.log(err);
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
          Login
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily:"inherit"
          }}
        >
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
            variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
          />
          <Btn onClick={login}
           variant="contained"
           btnVal="Login"/>
           
           
        
            
        </Box>
      </Box>
    </div>
  );
}
