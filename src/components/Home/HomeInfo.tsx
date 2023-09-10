import styled from "styled-components";
import Pentagon from "../Pentagon";
import { theme } from "../../utils/theme";
import Button from "../Button";

const Container = styled.div`
  width: 100vw;

  flex-direction: row;
`;

const Box = styled.div<{ bgtype: string }>`
  height: 100vh;

  background-color: ${(props) =>
    props.bgtype === "yellow"
      ? props.theme.highlightColor
      : props.bgtype === "mint"
      ? props.theme.highlightColor2
      : props.theme.backgroundColor};

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6vw;
  align-items: center;
`;

const TextBox = styled.span`
  width: 30%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;

  p {
    font-weight: bold;
    color: ${(props) => props.theme.textColor};
    font-size: 24px;
  }
`;

const Header = styled.div<{ fontcolor: string }>`
  color: ${(props) =>
    props.fontcolor === "default"
      ? props.theme.textColor
      : props.fontcolor === "mint"
      ? props.theme.highlightColor2
      : props.fontcolor === "yellow"
      ? theme.highlightColor1
      : props.fontcolor === "white"
      ? theme.backgroundColor
      : null};
  h2 {
    font-size: 48px;
  }

  h3 {
    font-size: 36px;
  }
`;

const ImgBox = styled.span<{ url: string }>`
  width: 30%;
  height: 50%;

  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export default function HomeInfo() {
  return (
    <>
      <Container>
        <Box bgtype={"yellow"}>
          <TextBox>
            <Header fontcolor={"default"}>
              <h3>조각투자</h3>
              <h2>벌써 부자</h2>
            </Header>
            <p>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum
            </p>

            <Button
              width={"180px"}
              height={"42px"}
              hover={"mint"}
              text={"HELLO"}
            />
          </TextBox>
          <ImgBox url={"images/resource_img_01.png"} />
        </Box>
        <Pentagon reverse={"false"} color={"yellow"} bgColor={"bg"} />

        <Box bgtype={"white"}>
          <ImgBox url={"images/resource_img_01.png"} />
          <TextBox>
            <Header fontcolor={"mint"}>
              <h2>조각투자 벌써부자</h2>
            </Header>
            <p>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum
            </p>

            <Button
              width={"180px"}
              height={"42px"}
              hover={"yellow"}
              text={"DEFAULT TEXT"}
            />
          </TextBox>
        </Box>
        <Pentagon reverse={"false"} color={"bg"} bgColor={"mint"} />

        <Box bgtype={"mint"}>
          <TextBox>
            <Header fontcolor={"white"}>
              <h2>조각투자 벌써부자</h2>
            </Header>
            <p>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum
            </p>

            <Button
              width={"180px"}
              height={"42px"}
              hover={"yellow"}
              text={"DEFAULT TEXT"}
            />
          </TextBox>
          <ImgBox url={"images/resource_img_01.png"} />
        </Box>
      </Container>
    </>
  );
}
