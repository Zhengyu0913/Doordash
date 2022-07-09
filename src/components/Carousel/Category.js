import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Category(props) {
  const [isSelected, setIsSelected] = useState(false);
  const clickHandler = (label) => {
    console.log(label);
    // setIsSelected(!isSelected);
    // if (isSelected) {
    //   props.Select();
    // } else {
    //   props.notSelect();
    // }
  };
  return (
    <Box
      sx={{ height: "80px", cursor: "pointer" }}
      onClick={() => {
        clickHandler(props.value.label);
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {props.value.icon}
      </Box>
      <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="p" fontSize={14} align="center">
          {props.value.label}
        </Typography>
      </Box>
    </Box>
  );
}
