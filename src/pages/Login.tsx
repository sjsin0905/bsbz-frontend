import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 12vh;
  background-color: ${(props) => props.theme.mainColor};
`;

const Main = styled.div`
  height: 68vh;
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const TextBox = styled.div`
  height: 68vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20vh;
  margin-right: 50vh;
  h2 {
    // 회원가입 텍스트
    margin-bottom: 2vh;
    font-size: 40px;
  }
`;

const Forms = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 40vh;
    // 입력 폼

    p {
      margin-bottom: 2vh;
    }

    input {
      // 데이터 입력 폼
      border: none;
      padding: 1vh;
      width: 240px;
      border-radius: 8px;
    }

    button {
      border: none;
      width: 180px;
      padding: 1vh;
      border-radius: 6px;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.borderColor};

  overflow: hidden;
  background-color: ${(props) => props.theme.borderColor};
  padding: 0 1px 6px 1px;

  transition: background-color ease 0.3s;

  button {
    background-color: ${(props) => props.theme.backgroundColor};
    transition: color ease 0.3s, background-color ease 0.3s;
    font-weight: bold;
  }

  &:hover {
    cursor: pointer;
    button {
      color: ${(props) => props.theme.borderColor};
      background-color: ${(props) => props.theme.cyColor};
      cursor: pointer;
    }
  }
`;

const InputBox = styled.div`
  background-color: ${(props) => props.theme.borderColor};
  margin-bottom: 2vh;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.borderColor};
  overflow: hidden;
  padding: 0 1px 6px 1px;
`;

interface IFormData {
  user_id: string;
  password: string;
}

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onValid = (data: IFormData) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <>
      {isLoading && <Loading />}
      <Navigation />
      <Container>
        <Main>
          <TextBox>
            <Forms>
              <h2>투자의 새로운 패러다임</h2>
              <br></br>
              <br></br>
              <form onSubmit={handleSubmit(onValid)}>
                <InputBox>
                  <input
                    {...register("user_id", {
                      required: "아이디를 입력하세요.",
                    })}
                    type="text"
                    placeholder="아이디"
                  />
                </InputBox>
                <InputBox>
                  <input
                    {...register("password", {
                      required: "비밀번호를 입력하세요.",
                    })}
                    type="password"
                    placeholder="비밀번호"
                  />
                </InputBox>
                <ButtonBox>
                  <button>로그인</button>
                </ButtonBox>

                <span>
                  {errors?.user_id?.message
                    ? errors?.user_id?.message
                    : errors?.password?.message
                    ? errors?.password?.message
                    : " "}
                </span>
              </form>
            </Forms>
          </TextBox>
        </Main>
      </Container>
      <Footer />
    </>
  );
}
