import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Category(props) {
  const currentLabel = props.value.label;
  const currentIcon = props.value.icon;
  const currentIsClicked = props.value.isClicked;
  const currentId = props.value.id;

  const clickHandler = () => {
    props.change(currentId, !currentIsClicked, currentLabel, currentIcon);
  };
  return (
    <Box sx={{ height: "80px", cursor: "pointer" }} onClick={clickHandler}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {currentIcon}
      </Box>
      <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="p"
          fontSize={14}
          align="center"
          color={currentIsClicked ? "primary" : ""}
        >
          {currentLabel}
        </Typography>
      </Box>
    </Box>
  );
}
