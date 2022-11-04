import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/physical-fitness-fitness-centre-computer-icons-mcveigh-sports-fitness-center-gym-icon-png-3f0941636548a877c04f24138df8cefc.png";

const Card = ({ item, setCard, card }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: card === item ? "2px solid #037ef3" : "",
        width: "290px",
        height: "280px",
        gap: "25px",
        cursor: "pointer",
      }}
      onClick={() => {
        setCard(item);
        window.scrollTo({
          top: 1500,
          behavior: "smooth",
        });
      }}
    >
      <img src={Icon} alt="" style={{ width: "70px", height: "70px" }} />

      <Typography
        fontSize="18px"
        fontWeight="bold"
        color="#0099e5"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default Card;
