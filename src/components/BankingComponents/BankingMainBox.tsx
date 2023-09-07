import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 12vh;
  background-color: ${(props) => props.theme.mainColor};
`;
const Main = styled.div`
  height: 50vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  height: 40vh;
  width: 50vw;
  border: 1px solid;
  padding: 0;

  > .unClickableAreaLeftOn {
    width: 25vw;
    height: 7vh;
    position: absolute;
    top: 158px;
    //border: 1px solid;
    pointer-events: none; /* 클릭 비활성화 */

    z-index: 2; /* 텍스트를 토글 버튼 위로 올립니다. */
  }
  > .unClickableAreaLeftOff {
    pointer-events: auto; /* 클릭 활성화 */
  }

  > .unClickableAreaRightOn {
    width: 25vw;
    height: 7vh;
    position: absolute;
    top: 158px;
    left: 50vw;
    //border: 1px solid;
    pointer-events: auto; /* 클릭 활성화 */

    z-index: 2; /* 텍스트를 토글 버튼 위로 올립니다. */
  }
  > .unClickableAreaRightOff {
    pointer-events: none; /* 클릭 비활성화 */
  }
`;

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  .container {
    display: flex;
  }

  .DepositBtn {
    z-index: 2; /* 텍스트를 토글 버튼 위로 올립니다. */
    margin-top: 15px;
    margin-right: 0px;
    margin-left: 220px;
  }
  .WithdrawBtn {
    z-index: 2; /* 텍스트를 토글 버튼 위로 올립니다. */
    margin-top: 15px;
    margin-right: 10px;
    margin-left: 450px;
  }

  > .toggle-container {
    width: 50vw;
    height: 6vh;
    border-radius: 12px;
    background-color: rgb(233, 233, 234);
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: rgb(233, 233, 234);

    // 애니메이션 효과 3곳 주석처리
    //transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 25vw;
    width: 25vw;
    height: 6vh;
    border-radius: 12px;
    background-color: ${(props) => props.theme.highlightColor};

    // 애니메이션 효과 3곳 주석처리
    //transition: 0.5s;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 0px;

    // 애니메이션 효과 3곳 주석처리
    //transition: 0.5s;
  }
`;

const Desc = styled.div`
  //설명 부분의 CSS를 구현
  text-align: center;
  margin: 20px;
`;

export default function BankingMainBox() {
  const [isOn, setisOn] = useState(true);

  const toggleHandler = () => {
    // isOn의 상태를 변경하는 메소드를 구현
    setisOn(!isOn);
  };
  return (
    <>
      <Container>
        <Main>
          <Box>
            <ToggleContainer
              // 클릭하면 토글이 켜진 상태(isOn)를 boolean 타입으로 변경하는 메소드가 실행
              onClick={toggleHandler}
            >
              {/* 아래에 div 엘리먼트 2개가 있다. 각각의 클래스를 'toggle-container', 'toggle-circle' 로 지정 */}
              {/* Toggle Switch가 ON인 상태일 경우에만 toggle--checked 클래스를 div 엘리먼트 2개에 모두 추가. 조건부 스타일링을 활용*/}
              <div
                className={`toggle-container ${
                  isOn ? "toggle--checked" : null
                }`}
              >
                <div className="container">
                  <a className="DepositBtn">입 금</a>
                  <a className="WithdrawBtn">출 금</a>
                </div>
              </div>
              <div
                className={`toggle-circle ${isOn ? "toggle--checked" : null}`}
              ></div>
            </ToggleContainer>
            <div
              className={`unClickableAreaLeftOn ${
                isOn ? "unClickableAreaLeftOff" : null
              }`}
            />
            <div
              className={`unClickableAreaRightOn ${
                isOn ? "unClickableAreaRightOff" : null
              }`}
            />
            {/* Desc 컴포넌트를 활용*/}
            {/* Toggle Switch가 ON인 상태일 경우에 Desc 컴포넌트 내부의 텍스트를 'Toggle Switch ON'으로, 그렇지 않은 경우 'Toggle Switch OFF'. 조건부 렌더링을 활용. */}
            {isOn === false ? (
              <Desc>
                <div className="OFF">출 금</div>
              </Desc>
            ) : (
              <Desc>
                <div className="ON">입 금</div>
              </Desc>
            )}
          </Box>
        </Main>
      </Container>
    </>
  );
}
