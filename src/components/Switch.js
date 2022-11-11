import React from "react";
import Switch from "@mui/material/Switch";

export default function MuiSwitch(props) {

  const { label, onChange, value } = props;

  return (
    <>
      <Switch checked={value} value={value} label={label} onChange={onChange} />
    </>
  );
}