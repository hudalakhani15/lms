import React from "react";
import { Button } from '@mui/material';


export default function Btn(props) {
    const { onClick, type, otherClasses, btnVal } = props;
    return (
        <Button
            sx={{ backgroundColor: "#1a5b61", '&:hover': { backgroundColor: "#8d99ae" } }}
            onClick={onClick} variant="contained" type={type} className={`btn ${otherClasses}`}
        >{btnVal}</Button>
    );
};