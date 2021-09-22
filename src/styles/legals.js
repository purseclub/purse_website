import styled from "styled-components";

export const LegalWrapper = styled.section`
  width: 100%;
  background-color: var(--white);
`;

export const LegalContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding-top: 4.5rem;
  padding-bottom: 2.5rem;
  @media all and (min-width: 991px) {
    padding-top: 10rem;
  }
`;

export const LegalHeading = styled.h1`
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 3rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: var(--black);
  padding-bottom: 4rem;

  @media all and (min-width: 991px) {
    font-size: 7.875rem;
    line-height: 1.5rem;
    letter-spacing: -0.03em;
    padding-bottom: 7.25rem;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;

  @media all and (min-width: 991px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    margin-top: 4.5rem;
  }
`;

export const SmallLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMedia = styled.div`
  margin-top: 3.125rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialLink = styled.a`
  cursor: pointer;
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: 0px;
  line-height: 1.3125rem;
  color: var(--black);

  @media all and (min-width: 991px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

export const Trademark = styled.h6`
  padding-top: 4.5rem;
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.005em;
  line-height: 0.5rem;
  text-align: center;
`;
