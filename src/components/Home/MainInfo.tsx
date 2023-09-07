import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { faBuilding, faPalette } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef } from "react";
import Pentagon from "../Pentagon";

const Container = styled.div`
  height: 180vh;
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

  h3 {
    font-size: 24px;
    margin: 36px 0;
    color: ${(props) => props.theme.textColor};
  }

  h4 {
    font-size: 18px;
    color: ${(props) => props.theme.mainColor};
    font-weight: lighter;
  }
`;

const DescriptionBox = styled.div`
  width: 80vw;
  height: auto;

  margin-top: 24px;
  border-top: 2px solid ${(props) => props.theme.textColor};
`;

const Circles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 72px;
  justify-content: space-around;
  align-items: center;

  height: 22vw;

  :hover {
    cursor: pointer;
    margin-bottom: 6vw;
  }
`;

const Circle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.textColor};

  width: 16vw;
  height: 16vw;
  border-radius: 16vw;
  border: 2px solid ${(props) => props.theme.textColor};
  border-right: 12px solid ${(props) => props.theme.textColor};
  border-bottom: 12px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.mainColor};

  font-size: 8vw;

  transition: margin-bottom ease 0.5s;

  :hover {
    margin-bottom: 0;
  }
`;

const Articles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 16vw;

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 18px;
    margin-top: 18px;
    color: ${(props) => props.theme.textColor};
  }
`;

const ButtonBorder = styled.div`
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  height: 10vh;
  width: 22vw;
  padding: 0 2px;

  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 1vw;
  overflow: hidden;

  background-color: ${(props) => props.theme.borderColor};
  transition: color ease 0.5s, border ease 0.5s;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.mainColor};
  }

  :hover {
    background-color: ${(props) => props.theme.mainColor};
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;

  height: 8vh;
  width: 100%;

  background-color: ${(props) => props.theme.textColor};
  border-radius: 0 0 1vw 1vw;
  color: ${(props) => props.theme.borderColor};

  transition: background-color ease-in 0.5s;

  &:hover {
    background-color: none;
    color: ${(props) => props.theme.textColor};
  }

  /* h3 태그에 pointer-events를 추가하여 hover 이벤트 비활성화 */
  > h3 {
    transition: color ease 0.5s;
    pointer-events: none; /* 하위 요소에 대한 마우스 이벤트 비활성화 */
  }
`;

const ActionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  opacity: 0;

  overflow: hidden;
  transform: translateX(100%);
  transition: opacity 2s ease 0.5s, transform 0.5s ease-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
    //시작 위치를 오른쪽 끝으로 설정
  }
`;

export default function MainInfo() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    // 스크롤 이벤트 핸들러를 추가
    const handleScroll = () => {
      if (section) {
        const elementTop = section.getBoundingClientRect().top;
        const elementBottom = section.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom >= 0) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      }
    };

    // 스크롤 이벤트를 감지하도록 리스너를 추가
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // 컴포넌트가 마운트된 후에도 한 번 실행
    handleScroll();

    // 컴포넌트가 언마운트될 때 리스너를 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
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
          <ActionBox ref={sectionRef}>
            <DescriptionBox>
              <Circles>
                <Circle>
                  <FontAwesomeIcon icon={faPalette} />
                </Circle>
                <Circle>
                  <FontAwesomeIcon icon={faGem} />
                </Circle>
                <Circle>
                  <FontAwesomeIcon icon={faBuilding} />
                </Circle>
              </Circles>
              <Articles>
                <Article>
                  <h3>예 술</h3>
                  <p>
                    예술품 투자. 이제 그 안에서 성공을 찾아보세요. 우리는 예술을
                    사랑하며 동시에 투자의 기회로서 그 가치를 높이 여기는
                    곳입니다.
                  </p>
                </Article>
                <Article>
                  <h3>럭 셔 리</h3>
                  <p>
                    우리는 명품 시장을 세심하게 분석하며, 가치가 오를 것으로
                    예측되는 브랜드와 제품을 신중하게 선택합니다. 명품을
                    소유하면서도 투자 수익을 동시에 누릴 수 있는 혜택을
                    누리세요.
                  </p>
                </Article>
                <Article>
                  <h3>부 동 산</h3>
                  <p>
                    우리는 부동산 시장을 깊게 이해하며, 가치가 높고 수익이
                    기대되는 투자 기회를 찾아냅니다. 부동산을 소유하면서도
                    장기적으로 성장하는 자산을 구축하세요.
                  </p>
                </Article>
              </Articles>
            </DescriptionBox>

            <TextBox>
              <h3>당신의 작은 투자, 더 큰 다양성으로 변환하세요!</h3>
              <h4>
                조각투자는 작은 금액으로도 다양한 자산에 접근하고 투자할 수 있는
                최적의 방법입니다. 수많은 자산 클래스 중에서도 주식, 채권,
                부동산 등 여러 분야에 투자할 수 있어, 여러분의 포트폴리오를
                다양하게 구성하실 수 있습니다. 이렇게 다양한 자산에 투자하면서,
                투자 리스크를 분산하고 안정적인 수익을 추구할 수 있습니다.
              </h4>
            </TextBox>

            <ButtonBorder>
              <Button>
                <h3>더 알아보기</h3>
              </Button>
            </ButtonBorder>
          </ActionBox>
        </Detail>
      </Container>
      <Pentagon reverse={false} />
    </>
  );
}
