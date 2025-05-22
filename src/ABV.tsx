import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const types = [
  {
    value: "5%",
    label: "5%",
  },
  {
    value: "10%",
    label: "10%",
  },
  {
    value: "12%",
    label: "12%",
  },
  {
    value: "15%",
    label: "15%",
  },
  {
    value: "20%",
    label: "20%",
  },
  {
    value: "25%",
    label: "25%",
  },
  {
    value: "40%",
    label: "40%",
  },
  {
    value: "50%",
    label: "50%",
  },
  {
    value: "55%",
    label: "55%",
  },
  {
    value: "90%",
    label: "90%",
  }
];

export const ABV = () => {
  return (
    <TextField
      id="outlined-basic"
      select
      label="Select"
      variant="outlined"
      defaultValue="12%"
      helperText="Please select the ABV"
      sx={{
        width: "30%",
        padding: "calc(50vh - 360px)",
      }}
    >
      {types.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};