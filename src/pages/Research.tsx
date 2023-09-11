import styled from "styled-components";
import Navigation from "../components/Navigation";
import Hood from "../components/Hood";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import { useEffect, useState } from "react";

import { imgList } from "../jsons/imgList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 300vh;
`;

const Recommandation = styled.div`
  /* background-color: ${(props) => props.theme.highlightColor}; */

  height: 30%;
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomBar = styled.div`
  background-color: ${(props) => props.theme.highlightColor2};

  height: 60%;
  width: 90%;
`;

interface ISliderProps {
  url: string;
  text: string;
  price: string;
  productId: string;
}

export default function Research() {
  const [sliderData, setSliderData] = useState<ISliderProps[]>();

  useEffect(() => {
    fetch("/src/jsons/imgList.json")
      .then((response) => response.json())
      .then((data) => {
        setSliderData(data);
        // 데이터 주입
      })
      .catch((error) => {
        console.error("ERROR: fetching slider-data error.");
      });
  }, []);

  return (
    <>
      <Hood title={"RESEARCH"} />
      <Navigation />
      <Container>
        <Recommandation>
          <Slider data={imgList} />
        </Recommandation>
        <BottomBar></BottomBar>
      </Container>
      <Footer />
    </>
  );
}
