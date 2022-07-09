import { Grid, Modal, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import CartContext from "../../context/cart-context";
const Image = styled.img`
  height: "100px";
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 4,
};

const Footer = (props) => {
  const [amount, setAmount] = useState(1);
  const onAddHandler = () => {
    setAmount(amount + 1);
  };
  const onMinusHandler = () => {
    if (amount <= 1) {
      return;
    }
    setAmount(amount - 1);
  };
  const onChangeHandler = (e) => {
    const enteredValue = e.target.value;
    const enteredValueNumber = +enteredValue;
    setAmount(enteredValueNumber);
  };

  const onSubmitHandler = () => {
    props.onSubmit(amount);
    props.onCloseModal();
  };
  const unitPrice = props.itemPrice;
  const totalAmount = amount * unitPrice;

  return (
    <Stack direction="row" spacing={2}>
      <button onClick={onMinusHandler}>-</button>
      <input
        type={"number"}
        min={"1"}
        value={amount}
        onChange={onChangeHandler}
      ></input>
      <button onClick={onAddHandler}>+</button>
      <button onClick={onSubmitHandler}>Add to cart</button>
      <div>Total Amount</div>
      <div>${totalAmount}</div>
    </Stack>
  );
};

export default function MenuItem(props) {
  const [open, setOpen] = useState(false);
  const cartCtx = useContext(CartContext);
  const openHandler = () => {
    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.menuItem.id,
      name: props.menuItem.name,
      amount: amount,
      price: props.menuItem.price,
    });
  };
  return (
    <Grid item xs={6} sx={{ cursor: "pointer" }}>
      <Paper onClick={openHandler}>
        <Grid container>
          <Grid item xs={8}>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }} m={2}>
              <h3>{props.menuItem.name}</h3>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }} m={2}>
              {props.menuItem.description}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }} m={2}>
              ${props.menuItem.price}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Image src={props.menuItem.menuImg}></Image>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Modal
        open={open}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.menuItem.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.menuItem.description}
          </Typography>

          <Image src={props.menuItem.menuImg}></Image>
          <Footer
            onSubmit={onAddToCartHandler}
            onCloseModal={closeHandler}
            itemPrice={props.menuItem.price}
          ></Footer>
        </Paper>
      </Modal>
    </Grid>
  );
}
