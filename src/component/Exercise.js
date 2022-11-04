import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "./Detail";
import Videos from "./Videos";
import Similar from "./Similar";
import { options, fetchData, videosOptions } from "./Api";

const Exercise = () => {
  const [term, setTerm] = useState({});
  const [video, setVideo] = useState([]);
  const [target, setTarget] = useState([]);
  const [equip, setEquip] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const Detailed = async () => {
      const Fetched = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        options
      );
      setTerm(Fetched);
      const fetchedVideos = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${Fetched.name}`,
        videosOptions
      );
      setVideo(fetchedVideos.contents);

      const targetExercise = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${Fetched.target}`,
        options
      );
      setTarget(targetExercise);
      const equipExercise = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${Fetched.equipment}`,
        options
      );
      setEquip(equipExercise);
    };
    Detailed();
  }, [id]);
  return (
    <Box>
      <Detail term={term} />
      <Videos video={video} name={term.name} />
    </Box>
  );
};

export default Exercise;

//  <Similar target={target} equipment={equip} />
