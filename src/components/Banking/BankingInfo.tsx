import { useState } from "react";
import { styled } from "styled-components";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-top: 12vh;
  background-color: ${(props) => props.theme.mainColor};
  margin-bottom: 50px;
`;
const Main = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  border-radius: 12px;
  height: 88vh;
  width: 50vw;
  //border: 1px solid;
  display: flex;

  flex-direction: column;

  flex-wrap: wrap;
  background-color: #ffd700ff;

  > .unClickableAreaLeftOn {
    width: 25vw;
    height: 6vh;

    //border: 1px solid;
    pointer-events: none; /* 클릭 비활성화 */
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #000000ff;

    z-index: 2; /* 텍스트를 토글 버튼 위로 올립니다. */
  }
  > .unClickableAreaLeftOff {
    pointer-events: auto; /* 클릭 활성화 */

    // 클릭시 비활성화 부분 밑줄 코드 1)
    border-bottom: 1px solid #ffd700ff;
  }

  > .unClickableAreaRightOn {
    width: 25vw;
    height: 6vh;
    position: absolute;
    left: 50%;
    //border: 1px solid;
    pointer-events: auto; /* 클릭 활성화 */
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ffd700ff;
    z-index: 2; /* 텍스트를 토글 버튼 위로 올립니다. */
  }
  > .unClickableAreaRightOff {
    pointer-events: none; /* 클릭 비활성화 */

    // 클릭시 비활성화 부분 밑줄 코드 2 )
    border-bottom: 1px solid #000000ff;
  }
`;

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 25vw;
  height: 0px;

  > .toggle-container {
    width: 50vw;
    height: 6vh;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #e9e9eaff;
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: #e9e9eaff;

    // 애니메이션 효과 3곳 주석처리
    //transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 0px;
    left: 25vw;
    width: 25vw;
    height: 6vh;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: ${(props) => props.theme.highlightColor};

    // 애니메이션 효과 3곳 주석처리
    //transition: 0.5s;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 0;

    // 애니메이션 효과 3곳 주석처리
    //transition: 0.5s;
  }
`;

export default function BankingInfo() {
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
              ></div>
              <div
                className={`toggle-circle ${isOn ? "toggle--checked" : null}`}
              ></div>
            </ToggleContainer>
            <div
              className={`unClickableAreaLeftOn ${
                isOn ? "unClickableAreaLeftOff" : null
              }`}
            >
              <a className="DepositBtn">입 금</a>
            </div>
            <div
              className={`unClickableAreaRightOn ${
                isOn ? "unClickableAreaRightOff" : null
              }`}
            >
              <a className="WithdrawBtn">출 금</a>
            </div>
            {/* Desc 컴포넌트를 활용*/}
            {/* Toggle Switch가 ON인 상태일 경우에 Desc 컴포넌트 내부의 텍스트를 'Toggle Switch ON'으로, 그렇지 않은 경우 'Toggle Switch OFF'. 조건부 렌더링을 활용. */}
            {isOn === false ? <Withdraw></Withdraw> : <Deposit></Deposit>}
          </Box>
        </Main>
      </Container>
    </>
  );
}
