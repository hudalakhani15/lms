import React from 'react';
import error from '../assets/404-error.png';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Btn from '../components/Button';

export default function NotFound() {
    return (
        <>
            <Container sx={{ textAlign: "center" }}>
                <img src={error} width="65%" alt="error" />
                <br />
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Btn btnVal="Go Back" />
                </Link>
            </Container>
        </>
    )
}