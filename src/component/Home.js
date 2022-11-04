import React, { useState } from "react";
import { Box } from "@mui/system";
import Top from "../component/Top";
import Center from "../component/Center";
import Bottom from "../component/Bottom";

const Home = () => {
  const [card, setCard] = useState("all");
  const [filterd, setFilterd] = useState([]);
  return (
    <Box>
      <Top />
      <Center card={card} setCard={setCard} setFilterd={setFilterd} />
      <Bottom card={card} filterd={filterd} setFilterd={setFilterd} />
    </Box>
  );
};

export default Home;
