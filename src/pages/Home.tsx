import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";
import Slider from "../components/Slider/Slider";
import MainInfo from "../components/Home/MainInfo";
import { styled } from "styled-components";
import Hood from "../components/Hood";
import { title } from "process";
import MainInfo2 from "../components/Home/MainInfo2";

const imgList = [
  {
    url: "https://www.funble.kr/img/thumb/lct_thumb.jpg",
    text: "해운대 엘시티",
    price: "3000",
    productId: "1",
  },
  {
    url: "https://www.funble.kr/img/building_img2.jpg",
    text: "롯데월드타워 시그니엘 1호",
    price: "3000",
    productId: "2",
  },
  {
    url: "https://kr.louisvuitton.com/content/dam/lv/online/high-end/women/handbags/W_LG_The_Capucines.html/jcr:content/assets/2000x2000_2.jpg?imwidth=2400",
    text: "루이비통 카퓌신",
    price: "3000",
    productId: "3",
  },
  {
    url: "https://content.rolex.com/v7/dam/new-watches/2023/new-yacht-master-42/new-watches-2023-yacht-master-42-mastering-lightness-m226627-0001_2301jva_003.jpg?imwidth=2440",
    text: "Yacht-Master 42",
    price: "3000",
    productId: "4",
  },
  {
    url: "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F07%2Fmost-valuable-nike-air-force-1-top-8-clot-entourage-kith-sagerstrong-virgil-abloh-off-white-moma-bigboi-outkast-undefeated-01.jpg?w=1260&format=jpeg&cbr=1&q=90&fit=max",
    text: "나이키 1월드 에어 포스 1",
    price: "3000",
    productId: "5",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Hood title={"HOMEPAGE"} />
      {isLoading && <Loading />}
      <Navigation />
      <Slider data={imgList} />
      <MainInfo />
      <MainInfo2 />
      <Footer />
    </>
  );
}
