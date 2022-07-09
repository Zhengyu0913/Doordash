import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import { Route, Switch, Redirect } from "react-router-dom";

import Stores from "./pages/Stores";
import StoreDetail from "./pages/StoreDetail";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import { Box, Container, Divider } from "@mui/material";
import React, { useState } from "react";
import SavedStores from "./pages/SavedStores";
import Payment from "./pages/Payment";
import Signout from "./pages/Signout";
import CartProvider from "./context/CartProvider";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import Header from "./components/Layout/Header";

import OptionsTab from "./components/Store/OptionsTab";
import GetFreeDeliveries from "./pages/GetFreeDeliveries";

const DUMMY_STORES = [
  {
    id: "s1",
    name: "KFC",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photosV2/f8b52765-b1eb-4549-85dd-3f6c782f6ffb-retina-large.JPG",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/3d2fa33c-021c-4373-84e6-16e701030859.4",
    menu: [
      {
        id: "kfcm1",
        name: "KFCSushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "kfcm2",
        name: "KFCSchnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "kfcm3",
        name: "KFCBarbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "kfcm4",
        name: "KFCGreen Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "kfcm5",
        name: "KFCGreen Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "kfcm6",
        name: "KFCGreen Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "kfcm7",
        name: "KFCGreen Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "kfcm8",
        name: "KFCGreen Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "kfcm9",
        name: "KFCGreen Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },

      {
        id: "kfcm10",
        name: "KFCGreen Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "kfcm11",
        name: "KFCGreen Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s2",
    name: "McDonald's",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/98a6f342-aa36-453e-ab97-33e377f52cfb-retina-large-png",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/9211ae76-cb11-47f9-b3af-cdd91439262e.png",
    menu: [
      {
        id: "mm1",
        name: "McDonald's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "mm2",
        name: "McDonald's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "mm3",
        name: "McDonald's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "mm4",
        name: "McDonald's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s3",
    name: "Wendy's",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photosV2/8ad4f543-7e95-4a69-873e-0a21f6c27809-retina-large.JPG",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/4f8f1ccf-1bc5-468a-9cd4-5d64c39c9040.jpg",
    menu: [
      {
        id: "wm1",
        name: "Wendy's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "wm2",
        name: "Wendy's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "wm3",
        name: "Wendy's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "wm4",
        name: "Wendy's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s4",
    name: "Jack in the Box",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photosV2/96d7ea99-407a-40da-a8ee-476b5cdbfb54-retina-large.JPG",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/e6735cfe-fb1f-4a92-9039-5c39622a4c63.jpg",
    menu: [
      {
        id: "jm1",
        name: "Jack Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "jm2",
        name: "Jack Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "jm3",
        name: "Jack Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "jm4",
        name: "Jack Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s5",
    name: "Carl's Jr",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/c2d572b2-7f6f-4f17-a4a2-250210bd03e0-retina-large.jpg",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/36fffbd7-155f-4692-98af-9002301034d2.jpg",
    menu: [
      {
        id: "cm1",
        name: "Carl's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm2",
        name: "Carl's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm3",
        name: "Carl's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm4",
        name: "Carl's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s6",
    name: "Carl's Jr",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/c2d572b2-7f6f-4f17-a4a2-250210bd03e0-retina-large.jpg",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/36fffbd7-155f-4692-98af-9002301034d2.jpg",
    menu: [
      {
        id: "cm1",
        name: "Carl's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm2",
        name: "Carl's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm3",
        name: "Carl's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm4",
        name: "Carl's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s7",
    name: "Carl's Jr",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/c2d572b2-7f6f-4f17-a4a2-250210bd03e0-retina-large.jpg",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/36fffbd7-155f-4692-98af-9002301034d2.jpg",
    menu: [
      {
        id: "cm1",
        name: "Carl's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm2",
        name: "Carl's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm3",
        name: "Carl's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm4",
        name: "Carl's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s8",
    name: "Carl's Jr",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/c2d572b2-7f6f-4f17-a4a2-250210bd03e0-retina-large.jpg",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/36fffbd7-155f-4692-98af-9002301034d2.jpg",
    menu: [
      {
        id: "cm1",
        name: "Carl's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm2",
        name: "Carl's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm3",
        name: "Carl's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm4",
        name: "Carl's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s9",
    name: "Carl's Jr",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/c2d572b2-7f6f-4f17-a4a2-250210bd03e0-retina-large.jpg",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/36fffbd7-155f-4692-98af-9002301034d2.jpg",
    menu: [
      {
        id: "cm1",
        name: "Carl's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm2",
        name: "Carl's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm3",
        name: "Carl's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm4",
        name: "Carl's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s10",
    name: "Carl's Jr",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/c2d572b2-7f6f-4f17-a4a2-250210bd03e0-retina-large.jpg",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/36fffbd7-155f-4692-98af-9002301034d2.jpg",
    menu: [
      {
        id: "cm1",
        name: "Carl's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm2",
        name: "Carl's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm3",
        name: "Carl's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm4",
        name: "Carl's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s11",
    name: "Carl's Jr",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/c2d572b2-7f6f-4f17-a4a2-250210bd03e0-retina-large.jpg",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/36fffbd7-155f-4692-98af-9002301034d2.jpg",
    menu: [
      {
        id: "cm1",
        name: "Carl's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm2",
        name: "Carl's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm3",
        name: "Carl's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm4",
        name: "Carl's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s12",
    name: "Carl's Jr",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/c2d572b2-7f6f-4f17-a4a2-250210bd03e0-retina-large.jpg",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/36fffbd7-155f-4692-98af-9002301034d2.jpg",
    menu: [
      {
        id: "cm1",
        name: "Carl's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm2",
        name: "Carl's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm3",
        name: "Carl's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm4",
        name: "Carl's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s13",
    name: "Carl's Jr",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/c2d572b2-7f6f-4f17-a4a2-250210bd03e0-retina-large.jpg",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/36fffbd7-155f-4692-98af-9002301034d2.jpg",
    menu: [
      {
        id: "cm1",
        name: "Carl's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm2",
        name: "Carl's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm3",
        name: "Carl's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm4",
        name: "Carl's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s14",
    name: "Carl's Jr",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/c2d572b2-7f6f-4f17-a4a2-250210bd03e0-retina-large.jpg",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/36fffbd7-155f-4692-98af-9002301034d2.jpg",
    menu: [
      {
        id: "cm1",
        name: "Carl's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm2",
        name: "Carl's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm3",
        name: "Carl's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm4",
        name: "Carl's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s15",
    name: "Carl's Jr",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/c2d572b2-7f6f-4f17-a4a2-250210bd03e0-retina-large.jpg",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/36fffbd7-155f-4692-98af-9002301034d2.jpg",
    menu: [
      {
        id: "cm1",
        name: "Carl's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm2",
        name: "Carl's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm3",
        name: "Carl's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm4",
        name: "Carl's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
  {
    id: "s16",
    name: "Carl's Jr",
    img: "https://img.cdn4dd.com/p/fit=cover,width=400,format=jpeg,quality=50/media/photos/c2d572b2-7f6f-4f17-a4a2-250210bd03e0-retina-large.jpg",
    headerImg:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/36fffbd7-155f-4692-98af-9002301034d2.jpg",
    menu: [
      {
        id: "cm1",
        name: "Carl's Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm2",
        name: "Carl's Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm3",
        name: "Carl's Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
      {
        id: "cm4",
        name: "Carl's Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        menuImg:
          "https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/50375cef-402b-4894-a23d-5d3e706bb51c-retina-large-jpeg",
      },
    ],
  },
];
function App() {
  const [restaurants, setRestaurants] = useState(DUMMY_STORES);

  return (
    <>
      <CartProvider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box>
            <Header></Header>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              height: 100,
              overflowY: "scroll",
            }}
          >
            <Container maxWidth={false} sx={{ mt: 5 }}>
              <Switch>
                <Route path="/" exact>
                  <Redirect to="/stores" />
                </Route>
                <Route path="/stores" exact>
                  <Stores rs={restaurants}></Stores>
                </Route>
                <Route path="/stores/:storeId">
                  <StoreDetail rs={restaurants}></StoreDetail>
                </Route>
                <Route path="/signin">
                  <SignIn />
                </Route>
                <Route path="/signup">
                  <SignUp></SignUp>
                </Route>
                <Route path="/account">
                  <Account></Account>
                </Route>
                <Route path="/orders">
                  <Orders></Orders>
                </Route>
                <Route path="/saved_stores">
                  <SavedStores></SavedStores>
                </Route>
                <Route path="/payment">
                  <Payment></Payment>
                </Route>
                <Route path="/signout">
                  <Signout></Signout>
                </Route>
                <Route path="/checkout">
                  <Checkout></Checkout>
                </Route>
                <Route path="/get_free_deliveries">
                  <GetFreeDeliveries></GetFreeDeliveries>
                </Route>
                <Route path="*">
                  <NotFound></NotFound>
                </Route>
              </Switch>
            </Container>
          </Box>
        </Box>
      </CartProvider>
    </>
  );
}

export default App;
