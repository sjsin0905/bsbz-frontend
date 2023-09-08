import styled from "styled-components";
import Member from "./Member";

const memberList = [
  {
    imgUrl: "https://avatars.githubusercontent.com/u/97649344?v=4",
    memberName: "정승윤",
    gitHubUrl: "https://github.com/syoon6682",
  },
  {
    imgUrl: "https://avatars.githubusercontent.com/u/108059303?v=4",
    memberName: "이준모",
    gitHubUrl: "https://github.com/ezurno",
  },
  {
    imgUrl: "https://avatars.githubusercontent.com/u/97722177?v=4",
    memberName: "조용훈",
    gitHubUrl: "https://github.com/sjsin0905",
  },
  {
    imgUrl: "https://avatars.githubusercontent.com/u/90839206?v=4",
    memberName: "이주원",
    gitHubUrl: "https://github.com/2oo1s",
  },
  {
    imgUrl: "https://avatars.githubusercontent.com/u/139327486?v=4",
    memberName: "정다현",
    gitHubUrl: "https://github.com/dahyeon730",
  },
  {
    imgUrl: "https://avatars.githubusercontent.com/u/81132057?v=4",
    memberName: "이채영",
    gitHubUrl: "https://github.com/lcy923",
  },
];

const Container = styled.div`
  background-color: ${(props) => props.theme.footerColor};
  color: ${(props) => props.theme.textColor3};
  height: 36vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 2vw;
`;

const Logo = styled.div``;

const Members = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 10px;
  margin-right: 18px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

const Lines = styled.div``;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  gap: 12px;
`;

export default function Footer() {
  return (
    <>
      <Container>
        <Info>
          <Logo>
            <h2>BSBZ.</h2>
          </Logo>

          <p>Copyright ⓒ BSBZ Inc. All Rights Reserved.</p>

          <Lines>
            <Line>
              <b>대표 전화</b>
              <p> XXXX - XXXX </p>
            </Line>
            <Line>
              <b>대표 메일</b>
              <p> XXXX@gmail.com </p>
            </Line>
            <Line>
              <b>운영 시간</b>
              <p> 평일 09시~18시(점심 12시~13시) </p>
            </Line>
          </Lines>
        </Info>
        <Info>
          <Line>
            <b>유의 사항</b>
          </Line>

          <p>KBIT4 - team.bsbz</p>
          <Lines>
            <Line>1</Line>
            <Line>2</Line>
            <Line>3</Line>
          </Lines>
        </Info>

        <Members>
          {memberList.map((member) => (
            <Member
              key={member.memberName}
              imgUrl={member.imgUrl}
              memberName={member.memberName}
              gitHubUrl={member.gitHubUrl}
            />
          ))}
        </Members>
      </Container>
    </>
  );
}
