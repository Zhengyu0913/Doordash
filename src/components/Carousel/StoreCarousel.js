import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

import { Navigation, FreeMode } from "swiper";

import { Box, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Image = styled.img`
  width: 100%;
  height: 202px;
  border-radius: 4px;
`;
export default function StoreCarousel(props) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{ nextEl: "." + props.next, prevEl: "." + props.prev }}
        freeMode={true}
        modules={[Navigation, FreeMode]}
        className="mySwiper"
      >
        {props.stores.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Box
                key={item.id}
                sx={{
                  textDecoration: "none",
                  underline: "none",
                  boxShadow: "none",
                }}
                component={Link}
                to={`/stores/${item.id}`}
              >
                <Paper elevation={0}>
                  <Image src={item.img} alt=""></Image>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography fontWeight="bold" variant="subtitle1">
                        {item.name}
                      </Typography>
                      <Typography
                        color="secondary"
                        component={"div"}
                        sx={{ textTransform: "lowercase" }}
                      >
                        2.0 mi | 18 min | $0 delivery fee
                      </Typography>
                    </Box>
                    <IconButton>
                      <FavoriteBorderIcon></FavoriteBorderIcon>
                    </IconButton>
                  </Box>
                </Paper>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
