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
           btnVal="Login"> 
          
            </Btn>
        </Box>
      </Box>
    </div>
  );
}
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { edit } from "./redux/loginReducer";

// function Login() {
//   const [model, setModel] = useState([]);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   let login = () => {
//     console.log(model);

//     dispatch(edit(model));
//     navigate("/");
//   };
//   return (
//     <>
//       <h1>Login</h1>
//       <input
//         placeholder="Email"
//         onChange={(e) => setModel({ ...model, email: e.target.value })}
//       />
//       <input
//         placeholder="Password"
//         onChange={(e) => setModel({ ...model, password: e.target.value })}
//       />
//       <button onClick={login}>Login</button>
//     </>
//   );
// }

// export default Login;