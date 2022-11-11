import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

function Input(props) {
  const { label, placeholder, id, type, value, required, onChange, endAdornment } = props;

  return (

    <FormControl fullWidth>
      <TextField variant="standard"
        className="input"
        label={label}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        // endAdornment={endAdornment}
      />
    </FormControl>
  )
}

export default Input;