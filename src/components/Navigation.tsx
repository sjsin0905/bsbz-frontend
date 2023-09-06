import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.mainColor};
  height: 12vh;

  position: fixed;
  width: 100%;
  z-index: 10;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  span {
    color: ${(props) => props.theme.textColor};
    padding: 12px 18px;
    border: 2px solid ${(props) => props.theme.borderColor};
    transition: border-top ease-in-out 0.3s, border-right 0.3s ease-in-out 0.1s,
      border-bottom 0.3s ease-in-out 0.2s, border-left 0.3s ease-in-out 0.3s;
  }

  span:hover {
    border-top: 2px solid ${(props) => props.theme.mainColor};
    border-right: 2px solid ${(props) => props.theme.mainColor};
    border-bottom: 2px solid ${(props) => props.theme.mainColor};
    border-left: 2px solid ${(props) => props.theme.mainColor};
  }
`;

const Logo = styled.div``;

export default function Navigation() {
  const nav = useNavigate();

  const onMove = (event: React.MouseEvent<HTMLSpanElement>) => {
    // console.log(event);
    let destination = event.currentTarget.innerText.toLowerCase();
    // console.log(destination);

    destination === "home" ? nav("/") : nav(`/${destination}`);
  };

  return (
    <Container>
      <Logo>
        <h2>LOGO</h2>
      </Logo>
      <NavBar>
        <span onClick={onMove}>HOME</span>
        <span onClick={onMove}>LOGIN</span>
        <span onClick={onMove}>SIGNUP</span>
        <span onClick={onMove}>LOGIN</span>
      </NavBar>
    </Container>
  );
}
