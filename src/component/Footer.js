import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/olympic-weightlifting-weight-training-computer-icons-dumbbell-gym-2581b6a8a23d0a633d46a68b3462b4ee.png";

const Footer = () => (
  <Box mt="80px">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "50px", height: "45px" }} />
    </Stack>
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      mt="15px"
    >
      <span style={{ color: "#fff", fontSize: "22px", fontWeight: "bold" }}>
        To communicate :
      </span>
      <a
        href="https://www.facebook.com/bassem.b.zaid/"
        rel="noreferrer"
        target="_blank"
      >
        <i
          className="fa-brands fa-facebook"
          style={{ fontSize: "22px", color: "#fff", marginLeft: "8px" }}
        ></i>
      </a>
      <a
        href="https://www.instagram.com/passim_zaid/"
        rel="noreferrer"
        target="_blank"
      >
        <i
          className="fa-brands fa-instagram"
          style={{ fontSize: "22px", color: "#fff", marginLeft: "8px" }}
        ></i>
      </a>
    </Stack>
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      mt="15px"
    >
      <Typography fontSize="20px" color="#fff" fontWeight="600">
        {" "}
        Whatsapp : 01010824299
      </Typography>
    </Stack>
    <Typography
      variant="h4"
      sx={{ fontSize: { lg: "25px", xs: "18px" } }}
      mt="20px"
      textAlign="center"
      pb="40px"
      fontWeight="bold"
      color="#fff"
    >
      Made with ❤️ by Bassem Zaid
    </Typography>
  </Box>
);

export default Footer;
