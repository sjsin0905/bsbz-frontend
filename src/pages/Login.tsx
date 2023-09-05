import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 12vh;
  background-color: ${(props) => props.theme.mainColor};
`;

const Main = styled.div`
  height: 68vh;
  width: 100vw;
`;

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <Loading />}
      <Navigation />
      <Container>
        <Main> </Main>
      </Container>
      <Footer />
    </>
  );
}
