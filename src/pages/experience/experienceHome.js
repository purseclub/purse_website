import React from "react";
import { createGlobalStyle } from "styled-components";
import ExperienceLayout from "../../components/Experience/ExperienceLayout";
import Home from "../../components/Experience/Home";
import GlobalFont from "../../fonts/font";
import CardImage from "../../images/card-frame.png";

const GlobalStyle = createGlobalStyle`
	*,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
		//colorcursor: none;
    }
	html, body {
		scroll-behavior: smooth;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	body {
		width: 100vw;
		height: 100vh;
		position: relative;
		background-color: var(--black);
		color: var(--white100);

		@media all and (min-width: 992px) {
		background-image: url(${CardImage});
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center right;
		image-rendering: -webkit-optimize-contrast;
  		}
	}

	:root {
		--black: rgba(36,39,41,1);
		--white100: rgba(248,248,248,1);
		--white200: rgba(140,142,143,1);
		--white300:rgba(75,78,79,1);
		--copper400:rgba(249,211,180,1);
		--copper40040:rgba(249,211,180,0.4);
		--copper600: rgba(217,137,106,1);
		--font-family-regular: 'CaustenRegular';
		--font-family-medium: 'CaustenMedium';
		--font-family-bold: 'CaustenBold';
		--font-family-semibold: 'CaustenSemiBold';
	}
`;

const ExperienceHome = () => {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <ExperienceLayout>
        <Home />
      </ExperienceLayout>
    </>
  );
};

export default ExperienceHome;
