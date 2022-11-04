import React from "react";
import { Box, Button, Typography } from "@mui/material";
import home from "../assets/images/home.avif";

const Top = () => {
  return (
    <Box
      sx={{ mt: { lg: "160px", xs: "110px" } }}
      position="relative"
      padding="20px"
    >
      {" "}
      <h3
        style={{
          color: "#fff",
          fontSize: "50px",
          marginBottom: "15px",
          fontFamily: "Poppins",
          fontWeight: "700",
        }}
        className="feel"
      >
        Feel The Power
      </h3>
      <p
        style={{
          fontSize: "30px",

          marginBottom: "20px",
          color: "#fff",
          lineHeight: "1.6",
          fontFamily: "Poppins",
          fontWeight: "400",
        }}
        className="here"
      >
        Here you can take advantage of some exercises <br />
        designed for you ...
      </p>
      <Button variant="contained" color="error" size="large" href="#exercise">
        Check For More{" "}
      </Button>
      <Typography
        fontWeight={600}
        // color="#FF2625"
        sx={{
          opacity: "0.6",
          display: { sm: "block", xs: "none" },
          fontSize: "200px",
        }}
        className="home"
      >
        Exercise
      </Typography>
      <img src={home} alt="" className="hero-banner-img" />
    </Box>
  );
};

export default Top;
