import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Spin from "./Spin";
import Scroll from "./Scroll";
const Similar = ({ equipment, target }) => {
  return (
    <Box sx={{ mt: { lg: "80px", xs: "25px" } }}>
      <Typography
        sx={{ fontSize: { lg: "22px", xs: "16" } }}
        p="20px"
        fontWeight="bold"
        color="#fff"
        mb="20px"
      >
        Similar <span style={{ color: "#037ef3" }}>Target Muscle</span> Training
      </Typography>
      <Stack
        direction="row"
        p="px"
        position="relative"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="35px"
      >
        {target.length !== 0 ? <Scroll part={target} /> : <Spin />}
      </Stack>
    </Box>
  );
};

export default Similar;
