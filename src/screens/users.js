import React from "react";
import app from "../config/firebaseconfig";
import { getAuth, signOut } from "firebase/auth";
import ResponsiveAppBar from "../components/Navbar";
import Navbar from "../components/Navbar";
import DataTable from "../components/datatable/DataTable";


export default function Users() {

    // const auth = getAuth(app);
    // signOut(auth).then(() => {
    //   // Sign-out successful.
    // }).catch((error) => {
    //   // An error happened.
    // });
    

    return (
        <>
        <Navbar />
        <h1>Result</h1>
        {/* <DataTable /> */}
        </>
    )
}