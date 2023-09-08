import styled from "styled-components";

const Container = styled.div`
  width: 100vw;

  flex-direction: row;
`;

const Box = styled.div<{ bgType: string }>`
  height: 100vh;

  background-color: ${(props) =>
    props.bgType === "yellow"
      ? props.theme.highlightColor
      : props.bgType === "mint"
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

const Header = styled.div`
  h2 {
    color: ${(props) => props.theme.textColor};
    font-size: 48px;
  }

  h3 {
    color: ${(props) => props.theme.textColor};
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
        <Box bgType={"yellow"}>
          <TextBox>
            <Header>
              <h3>조각투자</h3>
              <h2>벌써 부자</h2>
            </Header>
            <p>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum
            </p>
          </TextBox>
          <ImgBox url={"images/resource_img_01.png"} />
        </Box>

        <Box bgType={"white"}>
          <ImgBox url={"images/resource_img_01.png"} />
          <TextBox>
            <Header>
              <h2>조각투자 벌써부자</h2>
            </Header>
            <p>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum
            </p>
          </TextBox>
        </Box>

        <Box bgType={"mint"}>
          <TextBox>
            <Header>
              <h2>조각투자 벌써부자</h2>
            </Header>
            <p>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum
            </p>
          </TextBox>
          <ImgBox url={"images/resource_img_01.png"} />
        </Box>
      </Container>
    </>
  );
}
