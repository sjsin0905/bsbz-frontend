import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: 2fr 6fr 1fr 1fr;

  width: 90%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const BankName = styled.div`
  background-color: #ffffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const AccountNum = styled.div`
  background-color: #ffffffff;

  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 20px;

  padding: 3px 15px;
`;
const Select = styled.div`
  background-color: #ffffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Delete = styled.div`
  background-color: #ffffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Account() {
  return (
    <>
      <Container>
        <BankName>
          <p>국민 은행</p>
        </BankName>
        <AccountNum>
          <p>111-1111-11111-11</p>
        </AccountNum>
        <Select>선택</Select>
        <Delete>삭제</Delete>
      </Container>
    </>
  );
}
