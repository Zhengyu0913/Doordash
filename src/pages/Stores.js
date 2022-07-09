import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Categories from "../components/Carousel/Categories";
import StoresRow from "../components/Carousel/StoresRow";

import Cards from "../components/Store/Cards";
import StoreCategory from "../components/Store/StoreCategory";

export default function Stores(props) {
  const [categoryIsSelected, setCategoryIsSelected] = useState(false);
  const categorySelectHandler = () => {
    setCategoryIsSelected(true);
  };
  const categoryNotSelectHandler = () => {
    setCategoryIsSelected(false);
  };

  return (
    <Container>
      <Categories
        select={categorySelectHandler}
        notSelect={categoryNotSelectHandler}
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
        <StoreCategory reset={categoryNotSelectHandler}></StoreCategory>
      )}
    </Container>
  );
}
