import styled from "styled-components";

const Container = styled.div`
  height: 5vh;
  background-color: ${(props) => props.theme.mainColor};

  border-left: 50vw solid transparent;
  border-right: 50vw solid transparent;
  border-top: 5vh solid ${(props) => props.theme.borderColor};
`;

interface IPentagonProps {
  isReverse: boolean;
}

export default function Pentagon({ isReverse }: IPentagonProps) {
  return <Container />;
}
