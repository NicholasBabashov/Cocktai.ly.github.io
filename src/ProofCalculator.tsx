import * as React from 'react';
import react, { useState } from "react";
import { Paper, Typography, Stack, Box, Button, IconButton } from "@mui/material";
import { Ingredient } from "./Ingredient";
import { Size } from "./Size";
import { ABV } from "./ABV";
import { Gender } from "./Gender";
import { Weight } from "./Weight";
import DeleteIcon from '@mui/icons-material/Delete';


export const ProofCalculator = () => {
  const [componentsList, setComponentsList] = useState([{ id: Date.now() }]);

  const addComponentRow = () => {
  setComponentsList([...componentsList, { id: Date.now() }]);
  };
  const deleteComponentRow = (id: number) => {
    setComponentsList((prev) => prev.filter(row => row.id !== id));
  }

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          flexWrap: "wrap",
          width: 400,
          maxHeight: 512,
          margin: "auto",
          bgcolor: "#ece6f0",
          borderRadius: "15px",
          overflowY: "auto"
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontFamily: "Roboto",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          <br />
          Component Drinks
          <Stack spacing={1} sx={{ mt: 2, mb: 2 }} >
            {componentsList.map((item) => (
              <Stack direction="row" spacing={1} key={item.id}>
                <Ingredient />
                <Size />
                <ABV />
                <IconButton onClick={() => deleteComponentRow(item.id)}>
                <DeleteIcon/>
                </IconButton>
              </Stack>
            ))}
          </Stack>

          <Box textAlign="center">
          <Button variant="contained" onClick={addComponentRow} sx={{ mt: 2, mb: 2 }}>
          +
          </Button>
          </Box>
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          flexWrap: "wrap",
          width: 400,
          height: 256,
          overflowY: "auto",
          margin: "auto",
          bgcolor: "#ece6f0",
          borderRadius: "15px",
          marginTop: "50px",
          marginBottom: "50px",
          
        }}
      >
        <Typography
              variant="h5"
              component="h4"
              sx={{
                fontFamily: "Roboto",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              <br />
              Personal Information
              <br />
        </Typography>
        <Stack direction = "row" spacing = {1} sx={{padding: 2 }}>
          <Gender/> <Weight/>
        </Stack>
        <Stack direction="row">
          <Box sx={{ width: "50%" }}>
            <Typography
              variant="h5"
              component="h4"
              sx={{
                fontFamily: "Roboto",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              <br />
              Alcohol Volume
              <br />
            </Typography>
            <Paper
              elevation={3}
              sx={{
                flexWrap: "wrap",
                width: 175,
                height: 75,
                margin: "auto",
                bgcolor: "white",
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Paper>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography
              variant="h5"
              component="h4"
              sx={{
                fontFamily: "Roboto",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              <br />
              Amount of Drinks
              <br />
            </Typography>
            <Paper
              elevation={3}
              sx={{
                flexWrap: "wrap",
                width: 175,
                height: 75,
                margin: "auto",
                bgcolor: "white",
                borderRadius: "15px",
                marginTop: "20px",
              }}
            ></Paper>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};
