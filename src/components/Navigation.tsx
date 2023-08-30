import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor2};
  height: 5vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const Logo = styled.div``;

export default function Navigation() {
  const nav = useNavigate();

  const onMove = (event: React.MouseEvent<HTMLSpanElement>) => {
    let destination = event.currentTarget.innerText.toLowerCase();
    console.log(destination);

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
      </NavBar>
    </Container>
  );
}