import React from 'react';
import Input from '../components/Input';
import Navbar from "../components/Navbar";
import Btn from '../components/Button';
import { Grid, Typography } from '@mui/material';
// import Footer from "../components/Footer";
import { useSelector } from "react-redux";

export default function Home() {
  const loginDataFromReducer = useSelector((a) => a.loginReducer);
  console.log(loginDataFromReducer);
    return (
        <>
            <section>
                <Navbar />
 

      <h1>{loginDataFromReducer.userName}</h1>
      <h1>{loginDataFromReducer.email}</h1>
      <h1>{"*".repeat(loginDataFromReducer.password.length)}</h1>
   



            </section>
        </>
    )
}