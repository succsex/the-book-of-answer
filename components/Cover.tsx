import styled from "styled-components";

const Cover = styled.li`
  h1 {
    font-family: "Quintessential", cursive;
    text-align: center;
    font-size: 3rem;
  }
`;

export default function StyledCover() {
  return (
    <Cover>
      <h1>The Book of Answer</h1>
    </Cover>
  );
}
