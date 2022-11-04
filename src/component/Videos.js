import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Spin from "./Spin";
const Videos = ({ name, video }) => {
  console.log(video);
  return (
    <>
      <Typography mt="50px" fontWeight="bold" color="#fff" p="20px" mb="30px">
        {" "}
        Learn More About This Exersice{" "}
        <span style={{ color: "#037ef3" }}>({name})</span>
      </Typography>

      <Box>
        <Stack className="vid">
          {video.length !== 0 ? (
            video?.slice(0, 6).map((item, idx) => (
              <a
                key={idx}
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                rel="noreferrer"
                target="_blank"
                className="exercise-video"
              >
                {" "}
                <img
                  className="exer-img"
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <Box>
                  <Typography
                    sx={{ fontSize: { lg: "15px", xs: "13px" } }}
                    fontWeight={600}
                    color="#000"
                    mt="15px"
                  >
                    {item.video.title.slice(0, 35)}
                  </Typography>
                  <Typography fontSize="14px" color="#000" mb="10px">
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#333",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      channel name{" "}
                    </span>{" "}
                    :{" "}
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#777",
                      }}
                    >
                      {" "}
                      {item.video.channelName}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" color="#777" fontWeight="600">
                    {item.video.viewCountText}
                  </Typography>
                </Box>
              </a>
            ))
          ) : (
            <Spin />
          )}
        </Stack>
      </Box>
    </>
  );
};

export default Videos;
