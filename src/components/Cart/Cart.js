import { Button, Divider, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

import { useHistory } from "react-router-dom";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const history = useHistory();
  const checkOutHandler = () => {
    console.log(cartCtx.items);
    props.onClose();
    history.push("/checkout");
  };
  return (
    <>
      {hasItems && (
        <Button
          sx={{
            borderRadius: 10,
            display: "flex",
            justifyContent: "space-between",
            height: "50px",
            mx: "15px",
            my: "15px",
          }}
          variant="contained"
          onClick={checkOutHandler}
        >
          <Typography sx={{ fontWeight: "bold" }}>Check out</Typography>
          <Typography sx={{ fontWeight: "bold" }}>{totalAmount}</Typography>
        </Button>
      )}
      <Stack sx={{ m: 4 }} spacing={2}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </Stack>
      {hasItems && <Divider></Divider>}
      {!hasItems && (
        <Typography align="center">
          Your cart is empty.
          <br />
          Add items to get started
        </Typography>
      )}
    </>
  );
}
