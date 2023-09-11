import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ImgBox from "./ImgBox";

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

import { styled } from "styled-components";
import { Navigation, Autoplay } from "swiper/modules";

const Container = styled.div`
  background-repeat: no-repeat;
  background-color: transparent;

  height: 80%;
  width: 80%;
`;

export default function Slider({ data }) {
  return (
    <Container>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {data.map((product) => (
          <SwiperSlide
            key={product.productId}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImgBox
              url={product.url}
              text={product.text}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
