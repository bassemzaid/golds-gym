import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { options, fetchData } from "./Api";
import Result from "./Result";

const Bottom = ({ filterd, setFilterd, card }) => {
  const [current, setCurrent] = useState(1);
  const LastExercise = current * 10;
  const FirstExercise = LastExercise - 10;
  const currentExercises = filterd.slice(FirstExercise, LastExercise);

  const paginate = (event, value) => {
    setCurrent(value);

    window.scrollTo({ top: 1450, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchCategory = async () => {
      let category = [];
      if (card === "all") {
        category = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          options
        );
      } else {
        category = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${card}`,
          options
        );
      }
      setFilterd(category);
    };
    fetchCategory();
  }, [card, setFilterd]);

  return (
    <Box id="exercise" mt="70px" p="20px">
      <Typography fontSize="45px" fontWeight="bold" mb="40px" className="bot">
        Exercise Show
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        sx={{ gap: { lg: "100px", xs: "50px" } }}
      >
        {currentExercises.map((item, idx) => (
          <Result key={idx} item={item} />
        ))}
        ;
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {filterd.length > 10 && (
          <Pagination
            color="secondary"
            count={Math.ceil(filterd.length / 10)}
            defaultPage={1}
            size="large"
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Bottom;
