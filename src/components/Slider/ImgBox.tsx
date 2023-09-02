import { styled } from "styled-components";
// import { ISliderData } from "./Slider";

const Container = styled.span<{ url: string }>`
  width: 100vw;
  height: 75vh;

  display: flex;
  justify-content: start;
  align-items: flex-end;

  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0)
    ),
    url(${(props) => props.url});
  background-size: cover;
`;

const TextBox = styled.div`
  margin: 0 0 48px 96px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColor};

  h2 {
    font-size: 24px;
    color: ${(props) => props.theme.mainColor};
    width: 35%;
    margin: 0 0 8px 12px;
  }

  h3 {
    font-size: 16px;
    width: 35%;
    margin: 0 0 8px 12px;
    color: ${(props) => props.theme.textColor};
  }
`;

export default function ImgBox({ url, text, price }: any) {
  return (
    <Container url={url}>
      <TextBox>
        <h2>{text}</h2>
        <h3>{price}</h3>
      </TextBox>
    </Container>
  );
}
