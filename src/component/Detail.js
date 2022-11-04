import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import Body from "../assets/icons/bp.png";
import Target from "../assets/icons/ta.png";
import Equipment from "../assets/icons/eq.png";
const Detail = ({ term }) => {
  const { bodyPart, gifUrl, name, target, equipment } = term;

  return (
    <>
      <Typography
        fontSize="45px"
        fontWeight="bold"
        textAlign="center"
        mt="70"
        className="titel"
      >
        Exercise Details
      </Typography>
      <Stack className="det" mt="70px">
        {" "}
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: "30px", xs: "18px" } }} className="content">
          <Typography
            fontSize="25px"
            textTransform="capitalize"
            fontWeight="600"
            textAlign="center"
          >
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: { lg: "22px", xs: "18px" } }}
            lineHeight="1.6"
          >
            Exercises keep you strong.{" "}
            <span style={{ textTransform: "capitalize" }}>{name}</span> <br />{" "}
            bup is one of the best exercises <br />
            to target your {target}. It will help <br />
            you improve your mood and gain energy.
          </Typography>
          <Stack flexDirection="row" alignItems="center" gap="25px">
            <Button
              sx={{
                background: "#dbebfa",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
              }}
            >
              <img
                src={Body}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              fontSize="20px"
              fontWeight="500"
              textTransform="capitalize"
            >
              {bodyPart}
            </Typography>
          </Stack>
          <Stack flexDirection="row" alignItems="center" gap="25px">
            <Button
              sx={{
                background: "#dbebfa",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
              }}
            >
              <img
                src={Target}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              fontSize="20px"
              fontWeight="500"
              textTransform="capitalize"
            >
              {target}
            </Typography>
          </Stack>
          <Stack flexDirection="row" alignItems="center" gap="25px">
            <Button
              sx={{
                background: "#dbebfa",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
              }}
            >
              <img
                src={Equipment}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              fontSize="20px"
              fontWeight="500"
              textTransform="capitalize"
            >
              {equipment}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Detail;
