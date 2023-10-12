import {
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { ProofCalculator } from "./ProofCalculator";

function App() {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rye"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
      </head>
      <body>
        <Stack direction="row">
          <Box sx={{ width: "70%" }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontFamily: "Rye", textAlign: "center" }}
            >
              <br/>
              Cocktai.ly
            </Typography>
          </Box>
          <Box sx={{ width: "30%", padding: "calc(50vh - 360px)" }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontFamily: "Roboto", textAlign: "center" }}
            >
              Proof Calculator
              <Divider variant="middle" />
              <br />
            </Typography>
            <ProofCalculator />
          </Box>
        </Stack>
      </body>
    </html>
  );
}
export default App;
