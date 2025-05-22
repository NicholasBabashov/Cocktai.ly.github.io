import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const measurments = [
  {
    value: "Ounces",
    label: "oz",
  },
  {
    value: "milliliters",
    label: "ml",
  },
];

export const Size = () => {
  return (
    <TextField
      id="outlined-basic"
      select
      label="Select"
      variant="outlined"
      defaultValue="Ounces"
      helperText="Please select a Measurement"
      sx={{
        width: "30%",
        padding: "calc(50vh - 360px)",
        textAlign: "Center",
      }}
    >
      {measurments.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
