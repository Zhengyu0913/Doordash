import { Badge, Box, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import SearchIcon from "@mui/icons-material/Search";
export default function HeaderRight(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: { xs: 200, md: 400 },
          border: "1px solid #ccc",
          borderRadius: 20,
        }}
      >
        <IconButton sx={{ p: "10px" }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search stores, dishes, products"
        />
      </Paper>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="cart"
        sx={{ mr: 5, ml: 2 }}
        onClick={props.onCartOpen}
      >
        <Badge badgeContent={props.number} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
}
