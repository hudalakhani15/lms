import React from "react";
import "date-fns";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, TextField } from "@mui/material";


export default function MuiDatePicker(props) {
  const { label, placeholder, id, type, value, required, onChange, endAdornment } = props;

  
  return (
    <FormControl fullWidth>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        variant='inline'
        margin='normal'
        id="date-picker"
        format="MM/dd/yyy"
        label={label}
        placeholder="mm/dd/yy"
        required={required}
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </FormControl>
  );
}
