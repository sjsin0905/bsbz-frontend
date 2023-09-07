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
  color: ${(props) => props.theme.textColor2};
  height: 12vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.div``;

const Members = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 18px;
`;

export default function Footer() {
  return (
    <>
      <Container>
        <Logo>
          <h2>LOGO</h2>
        </Logo>
        <h2>FOOTER</h2>
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
