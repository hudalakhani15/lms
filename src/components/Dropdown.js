import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, Divider } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown(props) {
    const { label, placeholder, type, value, required, onChange, dataSource, displayField, valueField } = props;

    return (
        <>
            <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label={label}
                    placeholder={placeholder}
                    // type={type}
                    value={value}
                    required={required}
                    onChange={onChange}
                >
                    <MenuItem disabled value="">None</MenuItem>
                    <Divider />
                    {dataSource && dataSource.length > 0
                        ? dataSource.map((e, i) => (
                            <MenuItem key={e[valueField ? valueField : 'id']} value={e[displayField ? displayField : 'fullName']}>
                                {e[displayField ? displayField : 'fullName']}
                            </MenuItem>
                        ))
                        : null}
                </Select>
            </FormControl>


        </>
    )
}