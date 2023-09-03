import { useEffect, useRef } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 120vh;

  background-color: ${(props) => props.theme.mainColor};
  opacity: 0;

  transition: opacity ease-in 1s;
  &.visible {
    opacity: 1;
  }
`;

export default function MainInfo2() {
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
      <Container ref={sectionRef}>
        <h2>Hello</h2>
      </Container>
    </>
  );
}
