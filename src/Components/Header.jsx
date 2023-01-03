import React from "react";
import { Typography, CssBaseline, Grid, Box } from "@mui/material";

const navItems = [
  "Home",
  "Vaccine Registeration",
  "About",
  "Contact",
  "Sign Up",
];

function Header() {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={0} columns={16} bgcolor="primary.light" sx={{height:"100px", background:"#009FF9",justifyContent:"center"}}>
        {navItems.map((item,index)=>(
            <Grid key={index} item xs={2} mt={4} align="center" sx={{color:"white", fontSize:"15px"}} >{item}</Grid>
        ))}
      </Grid>
        <Box sx={{}}>

        </Box>
    </>
  );
}

export default Header;
