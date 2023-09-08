import { styled } from "styled-components";
import Account from "./Account";
import BSBZAccount from "./BSBZAccount";

const Main = styled.div`
  height: 90%;
  width: 100%;
  //border: 1px solid;
  background-color: ${(props) => props.theme.highlightColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BalanceBox = styled.div`
  border-radius: 12px;
  margin-top: 3%;
  margin-bottom: 3%;
  height: 12%;
  width: 90%;
  background-color: #ffffffff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
// "현재 잔액" 텍스트 넣은 칸
const TextBox = styled.div`
  width: 22%;
  height: 70%;
  font-size: 20px;
  display: flex;
`;

const Balance = styled.div`
  height: 50%;
  width: 60%;
  border-bottom: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;
const BalanceText = styled.div`
  height: 50%;
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

const BankSelectBox = styled.div`
  height: 22%;
  width: 90%;
  border-radius: 12px;
  margin-top: 0;

  background-color: #ffffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SelectTextBox = styled.div`
  height: 16%;
  width: 90%;
  border-bottom: 1px solid;
  background-color: #ffffffff;
  margin: 1%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const BankName = styled.div`
  height: 100%;
  width: 20%;
  border: 1px solid;
  background-color: #ffffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const AccountNum = styled.div`
  height: 100%;
  width: 60%;
  border: 1px solid;
  background-color: #ffffffff;

  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 20px;

  p {
    margin-right: 5%;
  }
`;
const SelectBtn = styled.div`
  height: 100%;
  width: 10%;
  border: 1px solid;
  background-color: #ffffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const DeleteBtn = styled.div`
  height: 100%;
  width: 10%;
  border: 1px solid;
  background-color: #ffffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Plus = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SelectedBankBox = styled.div`
  height: 6%;
  width: 90%;
  border-radius: 12px;
  margin-top: 3%;

  background-color: #ffffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TriangleBox = styled.div`
  height: 6%;
  width: 90%;
  margin-top: 1%;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent; /* 왼쪽 변 */
  border-right: 20px solid transparent; /* 오른쪽 변 */
  border-top: 40px solid #f00; /* 아래쪽 변 및 배경색 (여기서는 빨간색) */
  margin: 2%;
`;

const BSBZBankBox = styled.div`
  height: 6%;
  width: 90%;
  border-radius: 12px;
  margin-top: 1%;

  background-color: #ffffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputBalanceBox = styled.div`
  border-radius: 12px;
  margin-top: 5%;
  margin-bottom: 3%;
  height: 12%;
  width: 90%;
  background-color: #ffffffff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const InputBox = styled.div`
  height: 50%;
  width: 60%;
  border-bottom: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

const InputBalance = styled.input`
  height: 90%;
  width: 90%;
  border: none;
  font-size: 40px;
  text-align: center;
`;

const LastButton = styled.div`
  border-radius: 12px;
  height: 8%;
  width: 14%;
  background-color: #ffffffff;

  display: flex;
  justify-content: center;
`;

export default function Deposit() {
  return (
    <>
      <Main>
        <BalanceBox>
          <TextBox>
            <p>현재 잔액</p>
          </TextBox>
          <Balance>
            <p>2,100,000,111</p>
          </Balance>
          <BalanceText>
            <p>원</p>
          </BalanceText>
        </BalanceBox>
        <BankSelectBox>
          <Account />
          <SelectTextBox>
            <Plus>+</Plus>
          </SelectTextBox>
          <SelectTextBox>
            <Plus>+</Plus>
          </SelectTextBox>
        </BankSelectBox>
        <SelectedBankBox>
          <Account></Account>
        </SelectedBankBox>
        <TriangleBox>
          <Triangle></Triangle>
        </TriangleBox>
        <BSBZBankBox>
          <BSBZAccount></BSBZAccount>
        </BSBZBankBox>
        <InputBalanceBox>
          <InputBox>
            <InputBalance></InputBalance>
          </InputBox>
          <BalanceText>
            <p>원</p>
          </BalanceText>
        </InputBalanceBox>
        <LastButton></LastButton>
      </Main>
    </>
  );
}
