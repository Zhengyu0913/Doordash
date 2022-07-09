import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Box, Fab, ListItemAvatar, Typography } from "@mui/material";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import React, { useState } from "react";
import { Navigation, FreeMode } from "swiper";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { locationsTab } from "../Store/mock-data";
import Category from "./Category";
export default function Categories(props) {
  const [isSelected, setIsSelected] = useState({});

  return (
    <Box sx={{ position: "relative" }}>
      <Box mx={2}>
        <Swiper
          //   slidesPerView={11}
          //   spaceBetween={10}
          navigation={{
            nextEl: ".swiper-category-next",
            prevEl: ".swiper-category-prev",
          }}
          freeMode={true}
          modules={[Navigation, FreeMode]}
          className="mySwiper"
          breakpoints={{
            390: {
              slidesPerView: 4,
              spaceBetween: 7,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 8,
              spaceBetween: 9,
            },
            1300: {
              slidesPerView: 11,
              spaceBetween: 10,
            },
          }}
        >
          {locationsTab.map((value) => {
            return (
              <SwiperSlide key={value.id}>
                <Category value={value}></Category>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Fab
        className="swiper-category-prev"
        size="small"
        sx={{ position: "absolute", bottom: 18, backgroundColor: "white" }}
      >
        <ChevronLeftIcon></ChevronLeftIcon>
      </Fab>
      <Fab
        className="swiper-category-next"
        size="small"
        sx={{
          position: "absolute",
          bottom: 18,
          right: 1,
          backgroundColor: "white",
        }}
      >
        <ChevronRightIcon></ChevronRightIcon>
      </Fab>
    </Box>
  );
}
