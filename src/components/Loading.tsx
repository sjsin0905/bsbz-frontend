import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { faForumbee } from "@fortawesome/free-brands-svg-icons";
import Hood from "./Hood";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 100;

  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.borderColor2};
`;

const Dots = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 18px;

  span {
    color: ${(props) => props.theme.mainColor};
  }
`;

const Dot = styled.span`
  animation: blink1 3s 0s infinite alternate;

  @keyframes blink1 {
    0% {
      opacity: 1;
    }
    33% {
      opacity: 0.5;
    }
    66% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

const Dot2 = styled.span`
  animation: blink2 3s 0s infinite alternate;

  @keyframes blink2 {
    0% {
      opacity: 0.5;
    }
    33% {
      opacity: 0;
    }
    66% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Dot3 = styled.span`
  animation: blink3 3s 0s infinite alternate;

  @keyframes blink3 {
    0% {
      opacity: 0;
    }
    33% {
      opacity: 0.5;
    }
    66% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export default function Loading() {
  return (
    <>
      <Hood title={"LOADING..."} />
      <Container>
        <FontAwesomeIcon
          icon={faForumbee}
          beat
          style={{ color: "#fab005ff" }}
          fontSize={96}
        />
        {/* <Dots>
          <Dot>●</Dot>
          <Dot2>●</Dot2>
          <Dot3>●</Dot3>
        </Dots> */}
      </Container>
    </>
  );
}
