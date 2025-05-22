import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const types = [
  {
    value: "Wine",
    label: "Wine",
  },
  {
    value: "Beer",
    label: "Beer",
  },
  {
    value: "Liquor",
    label: "Liquor",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export const Ingredient = () => {
  return (
    <TextField
      id="outlined-basic"
      select
      label="Select"
      variant="outlined"
      defaultValue="Beer"
      helperText="Enter type of alcohol"
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