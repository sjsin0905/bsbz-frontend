import styled from "styled-components";

const Container = styled.div<{
  reverse: string;
  color: string;
  bgcolor: string;
}>`
  height: 5vh;
  background-color: ${(props) =>
    props.bgcolor === "bg"
      ? props.theme.backgroundColor
      : props.bgcolor === "mint"
      ? props.theme.highlightColor2
      : props.bgcolor === "yellow"
      ? props.theme.highlightColor
      : null};

  border-left: 50vw solid transparent;
  border-right: 50vw solid transparent;
  border-top: ${(props) => (props.reverse === "true" ? "0vh" : "5vh")} solid
    ${(props) =>
      props.color === "bg"
        ? props.theme.backgroundColor
        : props.color === "mint"
        ? props.theme.highlightColor2
        : props.color === "yellow"
        ? props.theme.highlightColor
        : props.color === "border"
        ? props.theme.navColor
        : null};

  border-bottom: ${(props) => (props.reverse === "true" ? "5vh" : "0vh")} solid
    ${(props) =>
      props.color === "bg"
        ? props.theme.backgroundColor
        : props.color === "mint"
        ? props.theme.highlightColor2
        : props.color === "yellow"
        ? props.theme.highlightColor
        : props.color === "border"
        ? props.theme.footerColor
        : null};
`;
// 역방향일 경우 border-top 을 변경

interface IPentagonProps {
  reverse: string;
  color: string;
  bgColor: string;
}

export default function Pentagon({ reverse, color, bgColor }: IPentagonProps) {
  return <Container reverse={reverse} color={color} bgcolor={bgColor} />;
}
