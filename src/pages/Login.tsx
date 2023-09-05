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

  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const LoginForm = styled.div`
  height: 50vh;
  border: 1px solid;
  width: 50vw;
  padding-top: 48px;
  padding-left: 48px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  form {
    text-align: center;
    padding-left: 48px;
  }

  input {
    border: 0px;
    border-radius: 12px;
    text-align: center;
    width: 280px;
    height: 30px;
    margin: 10px;
  }
`;

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const deleteValue = () => {};
  return (
    <>
      {isLoading && <Loading />}
      <Navigation />
      <Container>
        <Main>
          <LoginForm>
            <form action="#" method="post">
              <h2>투자의 새로운 패러다임</h2>
              <br></br>
              <br></br>
              <input type="text" value={"ID"} onClick={deleteValue}></input>
              <br></br>
              <input type="text" value={"PW"}></input>
            </form>
          </LoginForm>
        </Main>
      </Container>
      <Footer />
    </>
  );
}
