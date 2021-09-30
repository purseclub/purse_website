import styled from "styled-components";

export const LegalWrapper = styled.section`
  width: 100%;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

export const SocialLink = styled.a`
  flex: 1 1 10em;

  text-align: center;
  cursor: pointer;
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;
  font-size: clamp(0.75rem, 0.1vw, 1rem);
  letter-spacing: -0.005em;
  line-height: 1rem;
  color: var(--black);
`;

export const Trademark = styled.h6`
  padding-top: 3.5em;
  padding-bottom: 4.5em;
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.005em;
  line-height: 0.5rem;
  text-align: center;
  color: var(--black);
`;
