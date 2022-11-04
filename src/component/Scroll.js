import React, { useContext } from "react";
import { Box } from "@mui/system";
import Card from "./Card";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import { Typography } from "@mui/material";
import Result from "./Result";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const Scroll = ({ part, setCard, card, isCard }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {part.map((part) => (
        <Box
          key={part.id || part}
          itemId={part.id || part}
          title={part.id || part}
        >
          {isCard ? (
            <Card item={part} card={card} setCard={setCard} />
          ) : (
            <Result item={part} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default Scroll;
