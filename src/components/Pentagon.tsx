import styled from "styled-components";

const Container = styled.div<{ reverse: boolean }>`
  height: 5vh;
  background-color: ${(props) => props.theme.mainColor};

  border-left: 50vw solid transparent;
  border-right: 50vw solid transparent;
  border-top: ${(props) => (props.reverse ? "0vh" : "5vh")} solid
    ${(props) => props.theme.borderColor};

  border-bottom: ${(props) => (props.reverse ? "5vh" : "0vh")} solid
    ${(props) => props.theme.borderColor};
`;
// 역방향일 경우 border-top 을 변경

interface IPentagonProps {
  reverse: boolean;
}

export default function Pentagon({ reverse }: IPentagonProps) {
  return <Container reverse={reverse} />;
}
