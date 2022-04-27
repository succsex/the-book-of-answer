import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ({ children }) => {
  return (
    <Wrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </Wrapper>
  );
};
