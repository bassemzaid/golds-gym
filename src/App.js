import "./App.css";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Exercise from "./component/Exercise";
import Footer from "./component/Footer";
import Spin from "./component/Spin";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <Box width="500px" sx={{ width: { xl: "1500px" } }} m="auto">
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercise/:id" element={<Exercise />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Box>
      )}
    </>
  );
}

export default App;
