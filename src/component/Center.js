import React, { useEffect, useState } from "react";

import { Stack, Box, Typography, TextField, Button } from "@mui/material";
import { options, fetchData } from "./Api";

import Scroll from "./Scroll";

const Center = ({ card, setCard, setFilterd }) => {
  const [state, setState] = useState("");

  const [part, setPart] = useState([]);

  useEffect(() => {
    const exerciseData = async () => {
      const bodyData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      setPart(["all", ...bodyData]);
    };
    exerciseData();
  }, []);

  const searchHandler = async () => {
    if (state) {
      const data = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        options
      );
      console.log(data);
      const filteredData = data.filter(
        (data) =>
          data.name.toLowerCase().includes(state) ||
          data.equipment.toLowerCase().includes(state) ||
          data.bodyPart.toLowerCase().includes(state) ||
          data.target.toLowerCase().includes(state)
      );
      setState("");
      setFilterd(filteredData);
    }
  };
  return (
    <Stack alignItems="center" justifyContent="center" mt="35px" p="20px">
      <Typography
        fontWeight={700}
        mb="30px"
        textAlign="center"
        color="#fff"
        sx={{
          fontSize: {
            lg: "40px",
            xs: "30px",
          },
        }}
      >
        Some great exercises you <br />
        have to see
      </Typography>
      <Box position="relative" mb="40px" mt="50px">
        <TextField
          sx={{
            input: {
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              color: "#fff",
            },
            width: { lg: "850px", xs: "280px" },
          }}
          variant="standard"
          height="55px"
          value={state}
          onChange={(e) => setState(e.target.value)}
          type="text"
          placeholder="You can search here.."
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#d20962",
            color: "#fff",
            height: "35px",
            width: { lg: "150px", xs: "80px" },
            fontSize: { lg: "18px", xs: "14px" },
            position: "absolute",
          }}
          onClick={searchHandler}
        >
          Search
        </Button>
      </Box>
      <Box position="relative" p="20px" width="100%">
        <Scroll part={part} card={card} setCard={setCard} isCard />
      </Box>
    </Stack>
  );
};

export default Center;
