import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Importing All Pages
import Home from "../screens/home";
import Admin from "../screens/admin";
import StdForm from "../screens/stdform";
// import Users from "../screens/users";
import Result from "../screens/result";
import NotFound from "../screens/notfound";
import Login from "../screens/login";
import SignUp from "../screens/signup";
import StudentProfile from "../screens/profile";

export default function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="admin/*" element={<Admin />} />
                    <Route path="stdform" element={<StdForm />} />
                    <Route path="studentProfile" element={<StudentProfile />} />
                    <Route path="result" element={<Result />} />
                    <Route path="*" element={<NotFound />} />
                 <Route path="result" element={<Result />} />
                 <Route path="login" element={<Login />} />
                 <Route path="signup" element={<SignUp />} />
                </Routes>
            </Router>
        </>
    );
};