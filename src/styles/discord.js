import styled from "styled-components";

export const DiscordWrapper = styled.section`
  width: 100%;
  /* padding-bottom: 1.5rem; */

  @media all and (min-width: 991px) {
    padding-bottom: 3rem;
  }
`;

export const DiscordContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 4.5rem 0;

  @media all and (min-width: 991px) {
    padding: 10rem 0;
  }
`;

export const DiscordTitle = styled.p`
  width: 100%;
  font-family: var(--font-family-main-Regular);
  font-size: 4rem;
  letter-spacing: -0.05em;
  line-height: 4rem;
  color: var(--white);
  margin-bottom: 2.5rem;

  @media all and (min-width: 991px) {
    margin-bottom: 6rem;
    font-size: 6.8125rem;
    line-height: 7rem;
  }
`;
