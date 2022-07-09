import { Grid } from "@mui/material";
import React from "react";
import MenuItem from "./MenuItem";

export default function MenuDetails(props) {
  const menuList = props.menu;

  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      {menuList.map((item) => {
        return <MenuItem key={item.id} menuItem={item}></MenuItem>;
      })}
    </Grid>
  );
}
