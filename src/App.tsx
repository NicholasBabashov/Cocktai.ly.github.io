import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

function App() {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rye"
        />
      </head>
      <body>
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontFamily: "Rye", textAlign: "center" }}
            >
              Cocktai.ly
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: 512,
              height: 512,
              margin: "auto",
              bgcolor: "#ece6f0",
              borderRadius: "15px",
            }}
          >
            <Paper elevation={3} />
          </Box>
        </Container>
      </body>
    </html>
  );
}

export default App;
