import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

export const Gender = () => {
  return (
    <TextField
      id="outlined-basic"
      select
      label="Select"
      variant="outlined"
      defaultValue="Male"
      helperText="Please select a Gender"
      sx={{
        width: "30%",
        padding: "calc(50vh - 360px)",
      }}
    >
      {genders.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
