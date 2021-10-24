import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
		text-decoration: none;
		/* cursor: none; */
    }
	body {
       
	overscroll-behavior-y: none;
	font-display: swap;
	-webkit-tap-highlight-color: transparent;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
   }
   :root {
	--black: #292A2B;
	--white: #F5F5F5;
	background-color: var(--black);
	color: var(--white);
	--font-family-main: 'Basement', sans-serif;
	--font-family-main-Regular: 'CaustenRegular', sans-serif;
    --font-family-main-Medium: 'CaustenMedium', sans-serif;
    --font-family-main-SemiBold: 'CaustenSemiBold', sans-serif;
    --font-family-main-Bold: 'CaustenBold', sans-serif;
	--font-family-main-ExtraBold: 'CaustenExtraBold', sans-serif;
   }
`;

export const LegalHeaderWrapper = styled.header`
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  /* z-index: 10; */
  padding: 4em 0;

  @media all and (min-width: 991px) {
    padding: 5em 0;
  }
`;

export const LegalHeaderContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LegalHeaderButton = styled.a`
  /* width: 6.5rem;
  height: 3rem; */
  color: var(--white);
  cursor: pointer;
  border: 1px solid var(--white);
  border-radius: 50px;
  outline: none;
  padding: 1em 2em;
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: -0.001em;
  text-align: center;

  @media all and (min-width: 991px) {
    font-size: 1.125rem;
  }
`;

export const LegalMainContent = styled.main`
  position: relative;
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 2em;
`;

export const LegalTitle = styled.h1`
  font-family: var(--font-family-main-ExtraBold);
  font-weight: 800;
  font-size: 4rem;
  line-height: 3rem;
  letter-spacing: -0.05em;

  @media all and (min-width: 991px) {
    max-width: 50%;
    font-size: 6rem;
    line-height: 5rem;
    letter-spacing: -0.03em;
  }
`;

export const LegalPara = styled.p`
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.01em;
  ${(props) =>
    props.add &&
    css`
      margin: 3em 0;
    `}
  ${(props) =>
    props.smallAdd &&
    css`
      margin: 1em 0;
    `}

  @media all and (min-width: 991px) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    letter-spacing: 0.01em;
  }
`;

export const LegalContentSection = styled.section``;

export const LegalSubtitle = styled.h2`
  font-family: var(--font-family-main-Bold);
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: -0.04em;
  margin: 1em 0;

  @media all and (min-width: 991px) {
    font-size: 2.5rem;
    line-height: 3rem;
    letter-spacing: -0.03em;
  }
`;

export const LegalSmallSubtitle = styled.h3`
  font-family: var(--font-family-main-Bold);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.01em;
  margin: 2em 0;

  @media all and (min-width: 991px) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    letter-spacing: 0.01em;
  }
`;

export const LegalList = styled.ol`
  margin-top: 1em;
  & > li {
    margin-left: 2.5em;
    font-family: var(--font-family-main-Regular);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.01em;

    @media all and (min-width: 991px) {
      font-size: 1.125rem;
      line-height: 1.5rem;
      letter-spacing: 0.01em;
    }
  }
`;
