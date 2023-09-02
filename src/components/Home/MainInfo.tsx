import { styled } from "styled-components";

const Container = styled.div`
  height: 60vh;
  width: 100%;
  background-color: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.mainColor};
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 24px 72px;

  h2 {
    font-size: 36px;
    margin-bottom: 24px;
    color: ${(props) => props.theme.textColor};
  }

  p {
    font-size: 18px;
  }
`;

export default function MainInfo() {
  return (
    <>
      <Container>
        <Detail>
          <TextBox>
            <h2>조각 투자란?</h2>
            <p>
              조각투자란 큰 금액을 투자하지 않고도 작은 금액으로도 다양한 자산에
              투자하는 방식을 말합니다. 이를 통해 투자자는 자신의 자본을 여러
              개의 작은 부분으로 나누어 다양한 자산에 분산하여 투자할 수
              있습니다.
            </p>
          </TextBox>
        </Detail>
      </Container>
    </>
  );
}
