import React from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import logo from "../assets/images/olympic-weightlifting-weight-training-computer-icons-dumbbell-gym-2581b6a8a23d0a633d46a68b3462b4ee.png";

const Nav = () => {
  return <Stack direction="row" sx={{gap :{
    xs:"45px", sm:"120px"
  }}}>
  <Link to="/">
  <img src={logo} alt="logo"  style={{ width:"50px", height:"50px", margin:"10px 20px"}}/>
  </Link>
  <Stack direction="row"
  gap="35px"
  fontSize="22px"
  alignItems="center"
  > 
  <Link to="/" style={{textDecoration:"none", color:"#00bce4", borderBottom:"2px solid #d20962"}}>Home</Link>
  <a href="#exercise" style={{textDecoration:"none", color:"#00bce4"}}>Exercises</a>
  </Stack>
  </Stack>;
};

export default Nav;
