import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  InputAdornment,
  Select,
  FormControl,
} from "@mui/material";

export const Size = () => {
  const [size, setSize] = useState("");
  const [unit, setUnit] = useState("oz");

  return (
    <TextField
      label="Size"
      type="Number"
      value={size}
      onChange={(e) => setSize(e.target.value)}
      helperText="Enter Amount of said Measurment"
      sx={{ width: "50%" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <FormControl variant="standard" sx={{ minWidth: 60 }}>
              <Select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <MenuItem value="ml">ml</MenuItem>
                <MenuItem value="oz">oz</MenuItem>
              </Select>
            </FormControl>
          </InputAdornment>
        ),
      }}
      inputProps={{ min: 0 }}
    />
  );
};
