import { Box, Container } from "@mui/material";
import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";

import HomeIcon from "@mui/icons-material/Home";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import CartContext from "../../context/cart-context";

const pages = [
  { name: "Home", path: "/stores", icon: <HomeIcon></HomeIcon>, id: 0 },
  {
    name: "Pick up",
    path: "/pickup",
    icon: <ShoppingBagIcon></ShoppingBagIcon>,
    id: 1,
  },
  {
    name: "Offers",
    path: "/offers",
    icon: <LocalOfferIcon></LocalOfferIcon>,
    id: 2,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: <ReceiptIcon></ReceiptIcon>,
    id: 3,
  },
  {
    name: "Account",
    path: "/account",
    icon: <AccountBoxIcon></AccountBoxIcon>,
    id: 4,
  },
  {
    name: "Saved Stores",
    path: "/saved_stores",
    icon: <FavoriteBorderIcon></FavoriteBorderIcon>,
    id: 5,
  },
  {
    name: "Payment",
    path: "/payment",
    icon: <PaymentIcon></PaymentIcon>,
    id: 6,
  },

  {
    name: "Gift Card",
    path: "/giftcard",
    icon: <CardGiftcardIcon></CardGiftcardIcon>,
    id: 7,
  },
  {
    name: "Get Free Deliveries",
    path: "/get_free_deliveries",
    icon: <DeliveryDiningIcon></DeliveryDiningIcon>,
    id: 8,
  },
  {
    name: "Help",
    path: "/help",
    icon: <HelpCenterIcon></HelpCenterIcon>,
    id: 9,
  },
  {
    name: "Sign Out",
    path: "/signout",
    icon: <LogoutIcon></LogoutIcon>,
    id: 10,
  },
];

const dFlex = {
  display: "flex",
  flexDirection: "row",
};
const flexBetweenCenter = {
  display: "flex",
  justifyContent: { xs: "center", md: "space-between" },
  alignItems: "center",
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "start",
}));

const drawerWidth = 370;
export default function Header() {
  const cartCtx = React.useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCartDrawer, setOpenCartDrawer] = useState(false);

  const drawerOpenHandler = () => {
    setOpenDrawer(true);
  };

  const drawerCloseHandler = () => {
    setOpenDrawer(false);
  };

  const drawerCartOpenHandler = () => {
    setOpenCartDrawer(true);
  };

  const drawerCartCloseHandler = () => {
    setOpenCartDrawer(false);
  };

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    setOpenDrawer(false);
  };
  return (
    <>
      <Box
        sx={{
          ...dFlex,
          minHeight: 70,
          borderBottom: "1px solid #ddd",
        }}
      >
        <Container maxWidth="2000px">
          <Box
            sx={{
              ...flexBetweenCenter,
              minHeight: 70,
              px: 8,
            }}
          >
            <HeaderLeft onDrawerOpen={drawerOpenHandler}></HeaderLeft>
            <HeaderRight
              onCartOpen={drawerCartOpenHandler}
              number={numberOfCartItems}
            ></HeaderRight>
          </Box>
        </Container>
      </Box>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            //很关键，这里的"& .MuiDrawer-paper"不能写错，这个是决定弹出来的sidebar的
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        onClose={drawerCloseHandler}
        open={openDrawer}
      >
        <DrawerHeader>
          <IconButton onClick={drawerCloseHandler}>
            <CancelPresentationIcon></CancelPresentationIcon>
          </IconButton>
        </DrawerHeader>

        <List>
          {pages.map((page, index) => {
            return (
              <div key={index}>
                <ListItemButton
                  key={index}
                  component={Link}
                  to={page.path}
                  onClick={() => handleListItemClick(page.id)}
                  selected={selectedIndex === page.id}
                >
                  <ListItemIcon key={`icon${index}`}>{page.icon}</ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                    primary={page.name}
                    key={`text${index}`}
                  ></ListItemText>
                </ListItemButton>

                <Divider key={`key${index}`}></Divider>
              </div>
            );
          })}
        </List>
      </Drawer>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            //很关键，这里的"& .MuiDrawer-paper"不能写错，这个是决定弹出来的sidebar的
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="right"
        onClose={drawerCartCloseHandler}
        open={openCartDrawer}
      >
        <DrawerHeader>
          <IconButton onClick={drawerCartCloseHandler}>
            <CancelPresentationIcon></CancelPresentationIcon>
          </IconButton>
        </DrawerHeader>
        <Divider></Divider>
        <Cart onClose={drawerCartCloseHandler}></Cart>
      </Drawer>
    </>
  );
}
