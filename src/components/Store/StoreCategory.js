import { Button, Grid, Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import React from "react";
import Cards from "./Cards";

export default function StoreCategory(props) {
  const filteredList = [];
  for (let i = 0; i < props.restaurant.length; i++) {
    if (props.restaurant[i].category.includes(props.id)) {
      filteredList.push(props.restaurant[i]);
    }
  }

  console.log(filteredList);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
          marginTop: "15px",
        }}
      >
        <Typography
          variant="h2"
          fontSize={25}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          {filteredList.length} results
        </Typography>

        <Button
          onClick={props.reset}
          variant="contained"
          size="medium"
          sx={{
            boxShadow: "none",
            backgroundColor: "#E5E4E4",
            "&:hover": {
              backgroundColor: "#D5D5D5",
              boxShadow: "none",
            },
            color: "#010101",
          }}
        >
          Reset
        </Button>
      </Box>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredList.map((item) => {
          return (
            <Cards
              key={item.id}
              id={item.id}
              name={item.name}
              src={item.img}
            ></Cards>
          );
        })}
      </Grid>
    </>
  );
}
