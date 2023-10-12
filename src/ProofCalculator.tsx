import { Paper, Typography, Stack, Box } from "@mui/material";

export const ProofCalculator = () => {
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          flexWrap: "wrap",
          width: 512,
          height: 512,
          margin: "auto",
          bgcolor: "#ece6f0",
          borderRadius: "15px",
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
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          flexWrap: "wrap",
          width: 512,
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
