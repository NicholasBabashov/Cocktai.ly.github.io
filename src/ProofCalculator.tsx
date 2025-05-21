import react, { useState } from "react";
import { Paper, Typography, Stack, Box, Button } from "@mui/material";
import { Ingredient } from "./Ingredient";
import { Size } from "./Size";
import { ABV } from "./ABV";

export const ProofCalculator = () => {
  const [componentsList, setComponentsList] = useState([{ id: Date.now() }]);

  const addComponentRow = () => {
  setComponentsList([...componentsList, { id: Date.now() }]);
  };

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
          <Stack sx={{ padding: 2 }}>
            {componentsList.map((item) => (
              <Stack direction="row" spacing={1} key={item.id}>
                <Ingredient />
                <Size />
                <ABV />
              </Stack>
            ))}
          </Stack>

          <Box textAlign="center">
          <Button variant="contained" onClick={addComponentRow}>
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
          margin: "auto",
          bgcolor: "#ece6f0",
          borderRadius: "15px",
          marginTop: "50px",
        }}
      >
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
