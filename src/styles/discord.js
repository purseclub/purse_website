import styled from "styled-components";

export const DiscordWrapper = styled.section`
  width: 100%;
  margin: 15vh 0;

  @media all and (min-width: 991px) {
    margin: 20vh 0;
  }
`;

export const SpanHeading = styled.span`
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
  color: var(--black);
`;

export const Divide = styled.div`
  background-color: var(--white);
  width: 1px;
`;

export const SocialContainer = styled.div`
  width: 100%;
  margin-top: 5em;
  border: 1px solid var(--white);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: repeat(2, auto);

  @media all and (min-width: 991px) {
    width: 70%;
    margin: 0 auto;
    margin-top: 10em;
  }
`;

export const DiscordContainer = styled.div`
  color: var(--white);
  width: 100%;
  height: 5rem;
  padding: 1em;
  border-bottom: 1px solid var(--white);
  /* background-color: red; */

  & > svg {
    width: 100%;
    height: 100%;
  }

  @media all and (min-width: 991px) {
    height: 12rem;
    padding: 3.5em;
  }
`;
export const InstagramContainer = styled.div`
  color: var(--white);
  width: 100%;
  height: 5rem;
  padding: 1em;
  border-bottom: 1px solid var(--white);
  /* background-color: red; */

  & > svg {
    width: 100%;
    height: 100%;
    fill: var(--white);
  }
  @media all and (min-width: 991px) {
    height: 12rem;
    padding: 3.5em;
  }
`;
export const TwitterContainer = styled.div`
  color: var(--white);
  width: 100%;
  height: 5rem;
  padding: 1em;
  /* background-color: red; */

  & > svg {
    width: 100%;
    height: 100%;
    fill: var(--white);
  }
  @media all and (min-width: 991px) {
    height: 12rem;
    padding: 3.5em;
  }
`;
export const LinkdlenContainer = styled.div`
  color: var(--white);
  width: 100%;
  height: 5rem;
  padding: 1em;
  /* background-color: red; */

  & > svg {
    width: 100%;
    height: 100%;
    fill: var(--white);
  }
  @media all and (min-width: 991px) {
    height: 12rem;
    padding: 3.5em;
  }
`;
