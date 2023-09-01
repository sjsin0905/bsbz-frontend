import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Mousewheel,
} from "swiper/modules";
import ImgBox from "./ImgBox";

// interface IMainSliderProps {
//   data: ISliderData[];
// }

// export interface ISliderData {
//   url: string;
//   text: string;
// }

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { styled } from "styled-components";

const Container = styled.div`
  padding: 120px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9));
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.borderColor1};
`;

export default function Slider({ data }) {
  return (
    <Container>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 10, // 회전각도
          stretch: 0,
          depth: 100, // 깊이감도
          modifier: 2, //
          slideShadows: true, //선택한 부분 밝게 나머지는 그늘지게 해준다.
        }}
        navigation={true} // 네비게이션 버튼
        mousewheel={true} // 마우스 휠
        modules={[EffectCoverflow, Navigation, Mousewheel, Autoplay]} // 모듈추가
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {/* {data.map((value) => (
          <SwiperSlide>
            <ImgBox url={value.url} text={value.text} />
          </SwiperSlide>
        ))} */}
        {data.map((product) => (
          <SwiperSlide>
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
