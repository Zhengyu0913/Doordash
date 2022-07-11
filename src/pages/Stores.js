import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Categories from "../components/Carousel/Categories";
import StoresRow from "../components/Carousel/StoresRow";

import Cards from "../components/Store/Cards";
import StoreCategory from "../components/Store/StoreCategory";
import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from "react-icons/gi";
import { AiOutlineCoffee } from "react-icons/ai";
import { FaCampground } from "react-icons/fa";
import { RiEarthquakeFill } from "react-icons/ri";
export const defaultState = {
  list: [
    {
      id: 0,
      label: "Chicken",
      icon: <MdOutlineApartment size={24} />,
      isClicked: false,
    },
    { id: 1, label: "Mexican", icon: <BsSnow size={24} />, isClicked: false },
    {
      id: 2,
      label: "Desserts",
      icon: <MdHouseSiding size={24} />,
      isClicked: false,
    },
    {
      id: 3,
      label: "Fast Food",
      icon: <MdOutlineWater size={24} />,
      isClicked: false,
    },
    {
      id: 4,
      label: "American",
      icon: <GiKidSlide size={24} />,
      isClicked: false,
    },
    {
      id: 5,
      label: "Burgers",
      icon: <AiOutlineCoffee size={24} />,
      isClicked: false,
    },
    {
      id: 6,
      label: "Comfort Food",
      icon: <GiSpaceNeedle size={24} />,
      isClicked: false,
    },
    {
      id: 7,
      label: "Salad",
      icon: <FaCampground size={24} />,
      isClicked: false,
    },
    {
      id: 8,
      label: "Sandwiches",
      icon: <GiCampingTent size={24} />,
      isClicked: false,
    },
    {
      id: 9,
      label: "Chinese",
      icon: <GiLightningDome size={24} />,
      isClicked: false,
    },
    {
      id: 10,
      label: "Breakfast",
      icon: <BiHomeAlt size={24} />,
      isClicked: false,
    },
    {
      id: 11,
      label: "Seafood",
      icon: <GiEvilTree size={24} />,
      isClicked: false,
    },
    {
      id: 12,
      label: "Healthy",
      icon: <GiWaveSurfer size={24} />,
      isClicked: false,
    },
    {
      id: 13,
      label: "Pizza",
      icon: <GiMountainCave size={24} />,
      isClicked: false,
    },
    {
      id: 14,
      label: "Noodles",
      icon: <GiCaveEntrance size={24} />,
      isClicked: false,
    },
    {
      id: 15,
      label: "Japanese",
      icon: <GiGolfFlag size={24} />,
      isClicked: false,
    },
    { id: 16, label: "Soup", icon: <MdCabin size={24} />, isClicked: false },
    {
      id: 17,
      label: "Sushi",
      icon: <RiEarthquakeFill size={24} />,
      isClicked: false,
    },
  ],
};
export default function Stores(props) {
  const [categoryIsSelected, setCategoryIsSelected] = useState(false);
  const [state, setState] = useState(defaultState);
  const [currentIndex, setCurrentIndex] = useState(null);
  const categorySelectHandler = (index) => {
    setCategoryIsSelected(true);
    setCurrentIndex(index);
  };
  const categoryNotSelectHandler = () => {
    setCategoryIsSelected(false);
    setState(defaultState);
  };

  return (
    <Container>
      <Categories
        select={categorySelectHandler}
        notSelect={categoryNotSelectHandler}
        state={state}
        changeState={setState}
      ></Categories>
      {!categoryIsSelected && (
        <Box>
          <StoresRow
            next="swiper-next-1"
            prev="swiper-prev-1"
            title="Most Saved by People Nearby"
            restaurant={props.rs}
          ></StoresRow>
          <StoresRow
            next="swiper-next-2"
            prev="swiper-prev-2"
            title="Try Something New"
            restaurant={props.rs}
          ></StoresRow>
          <StoresRow
            next="swiper-next-3"
            prev="swiper-prev-3"
            title="Fastest Near You"
            restaurant={props.rs}
          ></StoresRow>
          <StoresRow
            next="swiper-next-4"
            prev="swiper-prev-4"
            title="Most Popular Local Restaurants"
            restaurant={props.rs}
          ></StoresRow>
          <StoresRow
            next="swiper-next-5"
            prev="swiper-prev-5"
            title="National Favorites"
            restaurant={props.rs}
          ></StoresRow>

          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {props.rs.map((item) => {
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
        </Box>
      )}
      {categoryIsSelected && (
        <StoreCategory
          reset={categoryNotSelectHandler}
          id={currentIndex}
          restaurant={props.rs}
        ></StoreCategory>
      )}
    </Container>
  );
}
