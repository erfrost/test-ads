import React from "react";
import "./circular.css";
import { Box, CircularProgress } from "@mui/material";

const Circular = () => {
  return (
    <Box className="circular" sx={{ display: "flex" }}>
      <CircularProgress sx={{ color: "#00A0AB" }} />
    </Box>
  );
};

export default Circular;
