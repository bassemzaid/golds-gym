export const options = {
  method: "GET",

  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "cd74f8576emsh1c46460e68b1d6bp1e7a1cjsnb4a38d68e60b",
  },
};

export const videosOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cd74f8576emsh1c46460e68b1d6bp1e7a1cjsnb4a38d68e60b",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
