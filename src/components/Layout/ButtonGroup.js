import { Button, Stack, Typography } from "@mui/material";

import React, { useState } from "react";

export default function ButtonGroup() {
  const [isDeliveryClicked, setIsDeliveryClicked] = useState(true);
  const [isPickupClicked, setIsPickupClicked] = useState(false);

  const deliveryClickHandler = () => {
    setIsDeliveryClicked(true);
    setIsPickupClicked(false);
  };

  const pickupClickHandler = () => {
    setIsDeliveryClicked(false);
    setIsPickupClicked(true);
  };

  return (
    <>
      <Stack direction="row">
        <Button
          variant="contained"
          sx={{
            boxShadow: "none",
            backgroundColor: isDeliveryClicked ? "#010101" : "white",
            "&:hover": {
              backgroundColor: isDeliveryClicked ? "#5A5A5A" : "white",
              boxShadow: "none",
            },
            color: isDeliveryClicked ? "white" : "#010101",
          }}
          onClick={deliveryClickHandler}
        >
          <Typography fontWeight="bold">Delivery</Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            boxShadow: "none",
            backgroundColor: isPickupClicked ? "#010101" : "white",
            "&:hover": {
              backgroundColor: isPickupClicked ? "#5A5A5A" : "white",
              boxShadow: "none",
            },

            color: isPickupClicked ? "white" : "#010101",
          }}
          onClick={pickupClickHandler}
        >
          <Typography fontWeight="bold">Pickup</Typography>
        </Button>
      </Stack>
    </>
  );
}
