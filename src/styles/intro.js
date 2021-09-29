import styled from "styled-components";

export const IntroWrapper = styled.section`
  width: 100%;
  margin-top: 20vh;
  @media all and (min-width: 991px) {
    margin-top: 25vh;
  }
`;

export const IntroContainer = styled.div`
  /* padding: 4.5rem 0; */

  @media all and (min-width: 991px) {
    /* padding: 10rem 0; */
  }
`;

export const IntroHeading = styled.h2`
  width: 100%;
  font-family: var(--font-family-main);
  font-size: 11vw;
  letter-spacing: 0.01em;
  line-height: 11vw;
  color: var(--black);
  font-weight: 400;
  text-align: center;
  /* margin: 0 auto; */

  @media all and (min-width: 991px) {
    /* line-height: 7rem; */
  }
`;

export const IntroParaContainer = styled.div`
  width: 100%;
  margin: 2.5rem auto;

  @media all and (min-width: 991px) {
    max-width: 50%;
  }
`;

export const IntroPara = styled.p`
  font-family: var(--font-family-main-Regular);
  font-size: 0.875rem;
  letter-spacing: 0.03em;
  line-height: 1.5rem;
  color: var(--black);
  font-weight: 400;
  text-align: center;

  @media all and (min-width: 991px) {
    font-size: 1.5rem;
    letter-spacing: 0.01em;
    line-height: 2rem;
  }
`;

export const IntroButtonContainer = styled.div`
  width: 100%;
  height: 4rem;
  position: relative;

  @media all and (min-width: 991px) {
    max-width: 50%;
    margin: 0 auto;
    height: 6.5rem;
  }
`;

export const IntroButton = styled.button`
  border: none;
  background-color: var(--blue);
  width: 100%;
  height: 100%;
  font-family: var(--font-family-main-SemiBold);
  font-size: 1.125rem;
  line-height: 1.375rem;
  letter-spacing: -0.01em;
  color: var(--white);

  @media all and (min-width: 991px) {
    font-size: 2rem;
    line-height: 2rem;
    letter-spacing: -0.04em;
  }
`;
