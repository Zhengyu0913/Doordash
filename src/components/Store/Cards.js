import { Box, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// const Container = styled.div`
//   width: 360px;
//   margin-top: 45px;
//   cursor: pointer;
// `;
const Image = styled.img`
  width: 100%;
  height: 202px;
  border-radius: 4px;
`;

export default function Cards(props) {
  return (
    <Grid item xs={10} sm={6} md={4} sx={{ cursor: "pointer" }}>
      <Box
        sx={{
          textDecoration: "none",
          underline: "none",
          boxShadow: "none",
        }}
        component={Link}
        to={`/stores/${props.id}`}
      >
        <Paper elevation={0}>
          <Image src={props.src} alt=""></Image>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography fontWeight="bold" variant="subtitle1">
                {props.name}
              </Typography>
              <Typography color="secondary" sx={{ textTransform: "lowercase" }}>
                2.0 mi | 18 min | $0 delivery fee
              </Typography>
            </Box>
            <IconButton>
              <FavoriteBorderIcon></FavoriteBorderIcon>
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
}
