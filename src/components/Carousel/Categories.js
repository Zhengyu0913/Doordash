import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Box, Fab, ListItemAvatar, Typography } from "@mui/material";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import React, { useState } from "react";
import { Navigation, FreeMode } from "swiper";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Category from "./Category";
import { defaultState } from "../../pages/Stores";

export default function Categories(props) {
  const changeHandler = (cur_id, cur_isClicked, cur_label, cur_icon) => {
    const newState = [];
    for (let i = 0; i < defaultState.list.length; i++) {
      if (defaultState.list[i].id === cur_id) {
        newState.push({
          id: cur_id,
          label: cur_label,
          icon: cur_icon,
          isClicked: cur_isClicked,
        });
      } else {
        newState.push(defaultState.list[i]);
      }
    }

    props.changeState({ list: newState });

    if (cur_isClicked) {
      props.select(cur_id);
    } else {
      props.notSelect();
    }
  };
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
          {props.state.list.map((value) => {
            return (
              <SwiperSlide key={value.id}>
                <Category value={value} change={changeHandler}></Category>
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
