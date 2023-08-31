import { styled } from "styled-components";
// import { ISliderData } from "./Slider";

const Container = styled.span<{ url: string }>`
  width: 40vh;
  height: 40vh;

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

  border-radius: 0 12px 12px 0;
  border: 1px solid ${(props) => props.theme.textColor2};
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColor2};

  h2 {
    font-size: 18px;
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