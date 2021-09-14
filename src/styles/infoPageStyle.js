import styled from "styled-components";

const InfoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--beige);
  display: block;
`;

const InfoContainer = styled.div`
  padding: var(--mobile-margin);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Timer = styled.div`
  width: 50%;
  height: 10vh;
  background-color: var(--black);
`;

export { InfoWrapper, InfoContainer, Timer };
