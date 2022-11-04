import React from "react";
import { Stack } from "@mui/material";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Spin = ({ loading }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <ClimbingBoxLoader color={"#11a8d0"} size={30} />
    </Stack>
  );
};

export default Spin;
