import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: ${(props) => props.theme.highlightColor};
`;

export default function HomeInfo() {
  return (
    <>
      <Container></Container>
    </>
  );
}
