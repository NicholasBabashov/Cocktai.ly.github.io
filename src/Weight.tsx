import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  InputAdornment,
  Select,
  FormControl,
} from "@mui/material";

export const Weight = () => {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("lbs");

  return (
    <TextField
      label="Weight"
      type="number"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
      helperText="Enter your weight"
      sx={{ width: "50%" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <FormControl variant="standard" sx={{ minWidth: 60 }}>
              <Select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <MenuItem value="kg">kg</MenuItem>
                <MenuItem value="lbs">lbs</MenuItem>
              </Select>
            </FormControl>
          </InputAdornment>
        ),
      }}
      inputProps={{ min: 0 }}
    />
  );
};
