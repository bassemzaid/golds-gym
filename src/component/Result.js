import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const Result = ({ item }) => {
  return (
    <Link to={`/exercise/${item.id}`} className="exercise-card">
      <img src={item.gifUrl} alt="" />
      <Stack
        direction="row"
        display="flex"
        justifyContent="space-around"
        alignContent="center"
      >
        <Button
          texttransform="capitalize"
          fontSize="15px"
          sx={{
            color: "#0079c1",
            fontWeight: "bold",

            padding: "7px",
            mr: "30px",
          }}
        >
          {item.bodyPart}
        </Button>
        <Button
          texttransform="capitalize"
          fontSize="15px"
          sx={{
            color: "#0079c1",
            fontWeight: "bold",

            padding: "7px",
          }}
        >
          {item.equipment}
        </Button>
      </Stack>
      <Typography
        ml="20px"
        color="#fff"
        fontWeight="bold"
        sx={{ fontSize: { lg: "20px", xs: "17px" } }}
        mt="15px"
        mb="11px"
        pb="15px"
        textTransform="capitalize"
      >
        {item.name}
      </Typography>
    </Link>
  );
};

export default Result;
