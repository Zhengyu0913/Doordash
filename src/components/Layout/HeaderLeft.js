import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DiamondIcon from "@mui/icons-material/Diamond";
import { Link } from "react-router-dom";
import GoogleMaps from "./GoogleMaps";
import ButtonGroup from "./ButtonGroup";
const displayOnDesktop = { display: { xs: "none", md: "block" } };

export default function HeaderLeft(props) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton onClick={props.onDrawerOpen}>
        <MenuIcon></MenuIcon>
      </IconButton>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          textDecoration: "none",
          underline: "none",
          boxShadow: "none",
        }}
        component={Link}
        to="/"
      >
        <DiamondIcon color="primary"></DiamondIcon>

        <Typography variant="h5" color="primary" fontWeight="bold">
          DOORDASH
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <ButtonGroup></ButtonGroup>
      </Box>
      <Box sx={displayOnDesktop}>
        <GoogleMaps></GoogleMaps>
      </Box>
    </Stack>
  );
}
