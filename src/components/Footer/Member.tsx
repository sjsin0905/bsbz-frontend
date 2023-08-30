import styled from "styled-components";

interface IMemberProps {
  imgUrl: string;
  memberName: string;
  gitHubUrl: string;
}

const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`;

export default function Member({
  imgUrl,
  memberName,
  gitHubUrl,
}: IMemberProps) {
  return (
    <>
      <a href={gitHubUrl}>
        <Img src={imgUrl} alt={memberName} />
      </a>
    </>
  );
}
