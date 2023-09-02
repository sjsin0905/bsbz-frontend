import { styled } from "styled-components";

const Container = styled.div`
  height: 60vh;
  width: 100%;
`;

const Detail = styled.div``;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px 72px;
  width: 40%;

  h2 {
    font-size: 48px;
    margin-bottom: 24px;
  }

  p {
    font-size: 24px;
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
