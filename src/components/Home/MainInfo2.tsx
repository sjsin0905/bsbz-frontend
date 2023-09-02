import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 120vh;

  background-color: ${(props) => props.theme.mainColor};
`;

export default function MainInfo2() {
  return (
    <>
      <Container>
        <h2>Hello</h2>
      </Container>
    </>
  );
}
